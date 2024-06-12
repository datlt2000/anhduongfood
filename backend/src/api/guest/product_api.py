from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from src.dependencies import get_db
from src.controllers import product_controller
from src.request.SearchRequest import SearchRequest

router = APIRouter()


@router.post("/product")
async def get_published_products(search_request: SearchRequest, db: AsyncSession = Depends(get_db)):
    return await product_controller.get_published_products(search_request, db)


@router.get("/product/{product_id}")
async def get_published_product(product_id: int, db: AsyncSession = Depends(get_db)):
    return await product_controller.get_published_product(product_id, db)


@router.get("/product/{product_id}/image/{image_id}")
async def get_image(product_id: int, image_id: int, db: AsyncSession = Depends(get_db)):
    return await product_controller.get_image_response(product_id, image_id, db)
