from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from src.dependencies import get_db
from src.request.post_request import PostRequest
from src.controllers import post_controller

router = APIRouter()


@router.get("/posts")
async def get_posts(db: AsyncSession = Depends(get_db)):
    return await post_controller.get_posts(db)


@router.get("/posts/{post_id}")
async def get_post(post_id: int, db: AsyncSession = Depends(get_db)):
    return await post_controller.get_post(post_id, db)


@router.post("/posts")
async def create_post(post: PostRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.create_post(post, db)


@router.put("/posts/{post_id}")
async def update_post(post_id: int, post: PostRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.update_post(post_id, post, db)


@router.delete("/posts/{post_id}")
async def delete_post(post_id: int, db: AsyncSession = Depends(get_db)):
    await post_controller.delete_post(post_id, db)
    return {"message": "Success"}
