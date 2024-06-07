from fastapi import APIRouter, Depends, UploadFile
from sqlalchemy.ext.asyncio import AsyncSession
from src.dependencies import get_db
from src.request.post_request import PostRequest
from src.controllers import post_controller

router = APIRouter()


@router.get("/post")
async def get_posts(db: AsyncSession = Depends(get_db)):
    return await post_controller.get_posts(db)


@router.get("/post/{post_id}")
async def get_post(post_id: int, db: AsyncSession = Depends(get_db)):
    return await post_controller.get_post_response(post_id, db)


@router.post("/post")
async def create_post(post: PostRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.create_post(post, db)


@router.put("/post/{post_id}")
async def update_post(post_id: int, post: PostRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.update_post(post_id, post, db)


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
