from fastapi import HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, text, func, delete, update
from src.const import path
from src.models.posts import Post, PostImage
from src.request.PostRequest import PostRequest
from src.const import date_time
import os
from datetime import datetime
import pathlib
from src.response.PostResponse import PostResponse
from src.const.enum import POST_STATUS
from src.request.SearchRequest import SearchRequest
from src.response.SearchResponse import SearchResponse
from src.request.ListIdRequest import ListIdRequest


async def get_posts(search_request: SearchRequest, db: AsyncSession) -> list[PostResponse]:
    results = await db.execute(select(Post)
                               .order_by(text(search_request.orderBy + " " + search_request.order))
                               .offset(search_request.start)
                               .limit(search_request.limit))
    posts = results.scalars().all()
    return [PostResponse.model_validate(post, from_attributes=True, strict=True) for post in posts]


async def count_posts(search_request: SearchRequest, db: AsyncSession) -> int:
    count_result = await db.execute(select(func.count(Post.id)).select_from(Post))
    count = count_result.scalar()
    return count


async def search_posts(search_request: SearchRequest, db: AsyncSession) -> SearchResponse[PostResponse]:
    posts = await get_posts(search_request, db)
    count = await count_posts(search_request, db)
    search_response = SearchResponse(
        **search_request.model_dump(), data=posts, total=count)
    return search_response


async def get_published_posts(search_request: SearchRequest, db: AsyncSession):
    results = await db.execute(select(Post)
                               .where(Post.status == POST_STATUS.PUBLISHED)
                               .order_by(text(search_request.orderBy + " " + search_request.order))
                               .offset(search_request.start)
                               .limit(search_request.limit))
    products = results.scalars().all()
    data = [PostResponse.model_validate(
        product, from_attributes=True, strict=True) for product in products]
    count_result = await db.execute(select(func.count(Post.id)).select_from(Post).where(Post.status == POST_STATUS.PUBLISHED))
    count = count_result.scalar()
    search_response = SearchResponse(
        **search_request.model_dump(), total=count, data=data)
    return search_response


async def get_post(post_id: int, db: AsyncSession) -> Post:
    post_model = await db.get(Post, post_id)
    if not post_model:
        raise HTTPException(
            status_code=404, detail=f"Post {post_id}: Does not exist")
    return post_model


async def get_published_post(post_id: int, db: AsyncSession) -> Post:
    post_model = await db.get(Post, post_id)
    if not post_model:
        raise HTTPException(
            status_code=404, detail=f"Post {post_id}: Does not exist")
    if post_model.status != POST_STATUS.PUBLISHED:
        raise HTTPException(
            status_code=400, detail=f"Post {post_id}: Does not in proper state")
    return post_model


async def get_post_response(post_id: int, db: AsyncSession) -> PostResponse:
    post_model = await get_post(post_id, db)
    post_res = PostResponse.model_validate(
        post_model, from_attributes=True, strict=True)
    return post_res


async def create_post(post: PostRequest, db: AsyncSession):
    post_dict = post.model_dump()
    post_model = Post(**post_dict)
    db.add(post_model)
    await db.commit()
    await db.refresh(post_model)
    return post_model


async def upload_image(post_id: int, image: UploadFile, db: AsyncSession):
    post_model = await get_post(post_id, db)
    image_model = PostImage(type=image.content_type)
    db.add(image_model)
    await db.commit()
    await db.refresh(image_model)
    image_id = image_model.id
    folder_path = os.path.abspath(path.IMAGE_URL)
    ext = pathlib.Path(image.filename).suffix
    file_name = f"post_{post_id}_image_{image_id}_{datetime.now().strftime(date_time.ISO_DATE_TIME)}{ext}"
    with open(folder_path + "/" + file_name, "wb") as file:
        data = await image.read()
        file.write(data)
    image_model.url = f"{path.THIS_SERVER_URL}/post/{post_id}/image/{image_id}"
    image_model.file_name = file_name
    image_model.post = post_model
    await db.commit()
    return {"message": "success"}


async def get_image(post_id: int, image_id: int, db: AsyncSession):
    image_model = await db.get(PostImage, image_id)
    if not image_model:
        raise HTTPException(
            status_code=404, detail=f"Id {image_id}: Does not exist")
    return image_model


async def get_image_response(post_id: int, image_id: int, db: AsyncSession) -> FileResponse:
    image_model = await get_image(post_id, image_id, db)
    _path = path.IMAGE_URL + "/" + image_model.file_name
    return FileResponse(_path)


async def delete_image(post_id: int, image_id: int, db: AsyncSession):
    image_model = await get_image(post_id, image_id, db)
    folder_path = os.path.abspath(path.IMAGE_URL)
    try:
        os.remove(folder_path + "/" + image_model.file_name)
    except OSError as e:
        pass
    await db.delete(image_model)
    await db.commit()
    return {"message": "success"}


async def update_post(post_id: int, post: PostRequest, db: AsyncSession):
    post_model = await get_post(post_id, db)
    post_dict = post.model_dump()
    post_model.update(**post_dict)
    await db.commit()
    return post_model


async def publish_post(post_id: int, db: AsyncSession):
    post_model = await get_post(post_id, db)
    post_model.status = POST_STATUS.PUBLISHED
    await db.commit()
    return post_model


async def unpublish_post(post_id: int, db: AsyncSession):
    post_model = await get_post(post_id, db)
    post_model.status = POST_STATUS.DRAFT
    await db.commit()
    return post_model


async def publish_posts(post_ids: ListIdRequest, db: AsyncSession):
    await db.execute(update(Post).where(Post.id.in_(post_ids.ids)).values(status=POST_STATUS.PUBLISHED))
    await db.commit()
    return {"message": "Success"}


async def unpublish_posts(post_ids: ListIdRequest, db: AsyncSession):
    await db.execute(update(Post).where(Post.id.in_(post_ids.ids)).values(status=POST_STATUS.DRAFT))
    await db.commit()
    return {"message": "Success"}


async def delete_post(post_id: int, db: AsyncSession):
    post_model = await get_post(post_id, db)
    await db.delete(post_model)
    await db.commit()
    return {"message": "Success"}


async def delete_posts(post_ids: ListIdRequest, db: AsyncSession):
    await db.execute(delete(Post).where(Post.id.in_(post_ids.ids)))
    await db.commit()
    return {"message": "Success"}
