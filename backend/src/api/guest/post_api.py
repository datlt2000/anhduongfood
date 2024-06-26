from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from src.dependencies import get_db
from src.controllers import post_controller
from src.request.SearchRequest import SearchRequest

router = APIRouter()


@router.post("/post")
async def get_posts(search_request: SearchRequest, db: AsyncSession = Depends(get_db)):
    return await post_controller.get_published_posts(search_request, db)


@router.get("/post/{post_id}")
async def get_published_post(post_id: int, db: AsyncSession = Depends(get_db)):
    return await post_controller.get_published_post(post_id, db)


@router.get("/post/{post_id}/image/{image_id}")
async def get_image(post_id: int, image_id: int, db: AsyncSession = Depends(get_db)):
    return await post_controller.get_image_response(post_id, image_id, db)
