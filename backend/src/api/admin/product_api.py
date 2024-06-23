from fastapi import APIRouter, Depends, UploadFile
from sqlalchemy.ext.asyncio import AsyncSession
from src.dependencies import get_db
from src.request.ProductRequest import ProductRequest
from src.controllers import product_controller
from src.request.SearchRequest import SearchRequest
from src.request.ListIdRequest import ListIdRequest
router = APIRouter()


@router.post("/product/search")
async def search_products(search_request: SearchRequest, db: AsyncSession = Depends(get_db)):
    return await product_controller.search_products(search_request, db)


@router.get("/product/{product_id}")
async def get_product(product_id: int, db: AsyncSession = Depends(get_db)):
    return await product_controller.get_product(product_id, db)


@router.post("/product")
async def create_product(product: ProductRequest, db: AsyncSession = Depends(get_db)):
    return await product_controller.create_product(product, db)


@router.put("/product/publish")
async def publish_products(product_ids: ListIdRequest, db: AsyncSession = Depends(get_db)):
    return await product_controller.publish_products(product_ids, db)


@router.put("/product/unpublish")
async def unpublish_products(product_ids: ListIdRequest, db: AsyncSession = Depends(get_db)):
    return await product_controller.unpublish_products(product_ids, db)


@router.put("/product/{product_id}")
async def update_product(product_id: int, product: ProductRequest, db: AsyncSession = Depends(get_db)):
    return await product_controller.update_product(product_id, product, db)


@router.put("/product/{product_id}/publish")
async def publish_product(product_id: int, db: AsyncSession = Depends(get_db)):
    return await product_controller.publish_product(product_id, db)


@router.put("/product/{product_id}/unpublish")
async def unpublish_product(product_id: int, db: AsyncSession = Depends(get_db)):
    return await product_controller.unpublish_product(product_id, db)


@router.post("/product/{product_id}/image")
async def upload_image(product_id: int, image: UploadFile, db: AsyncSession = Depends(get_db)):
    return await product_controller.upload_image(product_id, image, db)


@router.delete("/product/{product_id}/image/{image_id}")
async def delete_image(product_id: int, image_id: int, db: AsyncSession = Depends(get_db)):
    return await product_controller.delete_image(product_id, image_id, db)


@router.delete("/product/{product_id}")
async def delete_product(product_id: int, db: AsyncSession = Depends(get_db)):
    await product_controller.delete_product(product_id, db)
    return {"message": "Success"}


@router.delete("/product")
async def delete_products(product_ids: ListIdRequest, db: AsyncSession = Depends(get_db)):
    await product_controller.delete_products(product_ids, db)
    return {"message": "Success"}
