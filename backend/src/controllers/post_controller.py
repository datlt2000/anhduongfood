from fastapi import HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from src.const import path
from src.models.posts import Post, PostImage
from src.request.post_request import PostRequest
from src.const import date_time
import os
from datetime import datetime
import pathlib
from src.response.PostResponse import PostResponse


async def get_posts(db: AsyncSession):
    results = await db.execute(select(Post))
    posts = results.scalars().all()
    return posts


async def get_post(post_id: int, db: AsyncSession) -> Post:
    post_model = await db.get(Post, post_id)
    if not post_model:
        raise HTTPException(
            status_code=404, detail=f"Id {post_id}: Does not exist")
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


async def delete_post(post_id: int, db: AsyncSession):
    post_model = await get_post(post_id, db)
    await db.delete(post_model)
    await db.commit()
    return {"message": "Success"}
