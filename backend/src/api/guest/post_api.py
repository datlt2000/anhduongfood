from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from src.dependencies import get_db
from src.controllers import post_controller

router = APIRouter()


@router.get("/posts")
async def get_posts(db: AsyncSession = Depends(get_db)):
    return await post_controller.get_posts(db)


@router.get("/posts/{post_id}")
async def get_post(post_id: int, db: AsyncSession = Depends(get_db)):
    return await post_controller.get_post(post_id, db)
