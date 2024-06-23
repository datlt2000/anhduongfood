from fastapi import APIRouter, Depends, UploadFile
from sqlalchemy.ext.asyncio import AsyncSession
from src.dependencies import get_db
from src.request.PostRequest import PostRequest
from src.controllers import post_controller
from src.request.SearchRequest import SearchRequest
from src.request.ListIdRequest import ListIdRequest
router = APIRouter()


@router.post("/post/search")
async def search_posts(search_request: SearchRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.search_posts(search_request, db)


@router.get("/post/{post_id}")
async def get_post(post_id: int, db: AsyncSession = Depends(get_db)):
    return await post_controller.get_post_response(post_id, db)


@router.post("/post")
async def create_post(post: PostRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.create_post(post, db)


@router.put("/post/publish")
async def publish_posts(post_ids: ListIdRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.publish_posts(post_ids, db)


@router.put("/post/unpublish")
async def unpublish_posts(post_ids: ListIdRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.unpublish_posts(post_ids, db)


@router.put("/post/{post_id}")
async def update_post(post_id: int, post: PostRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.update_post(post_id, post, db)


@router.put("/post/{post_id}/publish")
async def publish_post(post_id: int, db: AsyncSession = Depends(get_db)):
    return await post_controller.publish_post(post_id, db)


@router.put("/post/{post_id}/unpublish")
async def unpublish_post(post_id: int, db: AsyncSession = Depends(get_db)):
    return await post_controller.unpublish_post(post_id, db)


@router.post("/post/{post_id}/image")
async def upload_image(post_id: int, image: UploadFile, db: AsyncSession = Depends(get_db)):
    return await post_controller.upload_image(post_id, image, db)


@router.delete("/post/{post_id}/image/{image_id}")
async def delete_image(post_id: int, image_id: int, db: AsyncSession = Depends(get_db)):
    return await post_controller.delete_image(post_id, image_id, db)


@router.delete("/post/{post_id}")
async def delete_post(post_id: int, db: AsyncSession = Depends(get_db)):
    await post_controller.delete_post(post_id, db)
    return {"message": "Success"}


@router.delete("/post")
async def delete_posts(post_ids: ListIdRequest, db: AsyncSession = Depends(get_db)):
    await post_controller.delete_posts(post_ids, db)
    return {"message": "Success"}
