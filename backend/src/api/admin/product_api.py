from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from src.dependencies import get_db
from src.request.product_request import ProductRequest
from src.controllers import product_controller

router = APIRouter()


@router.get("/products")
async def get_products(db: AsyncSession = Depends(get_db)):
    return await product_controller.get_products(db)


@router.get("/products/{product_id}")
async def get_product(product_id: int, db: AsyncSession = Depends(get_db)):
    return await product_controller.get_product(product_id, db)


@router.post("/products")
async def create_product(product: ProductRequest, db: AsyncSession = Depends(get_db)):
    return await product_controller.create_product(product, db)


@router.put("/products/{product_id}")
async def update_product(product_id: int, product: ProductRequest, db: AsyncSession = Depends(get_db)):
    return await product_controller.update_product(product_id, product, db)


@router.delete("/products/{product_id}")
async def delete_product(product_id: int, db: AsyncSession = Depends(get_db)):
    await product_controller.delete_product(product_id, db)
    return {"message": "Success"}
