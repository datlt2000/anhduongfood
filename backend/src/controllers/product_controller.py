from fastapi import HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, text, func, delete, update
from src.const import path
from src.models.products import Product
from src.models.products import ProductImage
from src.request.ProductRequest import ProductRequest
from src.response.ProductResponse import ProductResponse
import os
import pathlib
from datetime import datetime
from src.const import date_time
from src.const.enum import PRODUCT_STATUS
from src.request.SearchRequest import SearchRequest
from src.response.SearchResponse import SearchResponse
from src.request.ListIdRequest import ListIdRequest
from pydantic import ValidationError


async def get_products(search_request: SearchRequest, db: AsyncSession) -> list[ProductResponse]:
    results = await db.execute(select(Product)
                               .order_by(text(search_request.orderBy + " " + search_request.order))
                               .offset(search_request.start)
                               .limit(search_request.limit))
    products = results.scalars().all()
    data = [ProductResponse.model_validate(
        product, from_attributes=True, strict=True) for product in products]
    return data


async def count_products(search_request: SearchRequest, db: AsyncSession) -> int:
    count_result = await db.execute(select(func.count(Product.id)).select_from(Product))
    count = count_result.scalar()
    return count


async def search_products(search_request: SearchRequest, db: AsyncSession) -> SearchResponse[ProductResponse]:
    products = await get_products(search_request, db)
    count = await count_products(search_request, db)
    search_response = SearchResponse(
        **search_request.model_dump(), total=count, data=products)
    return search_response


async def get_published_products(search_request: SearchRequest, db: AsyncSession) -> SearchResponse[ProductResponse]:
    results = await db.execute(select(Product)
                               .where(Product.status == PRODUCT_STATUS.PUBLISHED)
                               .order_by(text(search_request.orderBy + " " + search_request.order))
                               .offset(search_request.start)
                               .limit(search_request.limit))
    products = results.scalars().all()
    data = [ProductResponse.model_validate(
        product, from_attributes=True, strict=True) for product in products]
    count_result = await db.execute(select(func.count(Product.id)).select_from(Product).where(Product.status == PRODUCT_STATUS.PUBLISHED))
    count = count_result.scalar()
    search_response = SearchResponse(
        **search_request.model_dump(), total=count, data=data)
    return search_response


async def get_product(product_id: int, db: AsyncSession) -> Product:
    product_model = await db.get(Product, product_id)
    if not product_model:
        raise HTTPException(
            status_code=404, detail=f"Product {product_id}: Does not exist")
    return product_model


async def get_published_product(product_id: int, db: AsyncSession) -> Product:
    product_model = await db.get(Product, product_id)
    if not product_model:
        raise HTTPException(
            status_code=404, detail=f"Product {product_id}: Does not exist")
    if product_model.status != PRODUCT_STATUS.PUBLISHED:
        raise HTTPException(
            status_code=400, detail=f"Product {product_id}: Does not in proper state")
    return product_model


async def get_product_response(product_id: int, db: AsyncSession) -> ProductResponse:
    product_model = await get_product(product_id, db)
    product_res = ProductResponse.model_validate(
        product_model, from_attributes=True, strict=True)
    return product_res


async def create_product(product: ProductRequest, db: AsyncSession):
    product_dict = product.model_dump()
    product_model = Product(**product_dict)
    db.add(product_model)
    await db.commit()
    await db.refresh(product_model)
    return product_model


async def upload_image(product_id: int, image: UploadFile, db: AsyncSession):
    product_model = await get_product(product_id, db)
    image_model = ProductImage(type=image.content_type)
    db.add(image_model)
    await db.commit()
    await db.refresh(image_model)
    image_id = image_model.id
    folder_path = os.path.abspath(path.IMAGE_URL)
    ext = pathlib.Path(image.filename).suffix
    file_name = f"product_{product_id}_image_{image_id}_{datetime.now().strftime(date_time.ISO_DATE_TIME)}{ext}"
    with open(folder_path + "/" + file_name, "wb") as file:
        data = await image.read()
        file.write(data)
    image_model.url = f"{path.THIS_SERVER_URL}/product/{product_id}/image/{image_id}"
    image_model.file_name = file_name
    image_model.product = product_model
    db.add(image_model)
    await db.commit()
    return {"message": "success"}


async def get_image(product_id: int, image_id: int, db: AsyncSession):
    image_model = await db.get(ProductImage, image_id)
    if not image_model:
        raise HTTPException(
            status_code=404, detail=f"Id {image_id}: Does not exist")
    return image_model


async def get_image_response(product_id: int, image_id: int, db: AsyncSession) -> FileResponse:
    image_model = await get_image(product_id, image_id, db)
    _path = path.IMAGE_URL + "/" + image_model.file_name
    return FileResponse(_path)


async def delete_image(product_id: int, image_id: int, db: AsyncSession):
    image_model = await get_image(product_id, image_id, db)
    folder_path = os.path.abspath(path.IMAGE_URL)
    try:
        os.remove(folder_path + "/" + image_model.file_name)
    except OSError as e:
        pass
    await db.delete(image_model)
    await db.commit()
    return {"message": "success"}


async def update_product(product_id: int, product: ProductRequest, db: AsyncSession):
    product_model = await get_product(product_id, db)
    product_dict = product.model_dump()
    product_model.update(**product_dict)
    await db.commit()
    return product_model


async def publish_product(product_id: int, db: AsyncSession):
    product_model = await get_product(product_id, db)
    product_model.status = PRODUCT_STATUS.PUBLISHED
    await db.commit()
    return product_model


async def unpublish_product(product_id: int, db: AsyncSession):
    product_model = await get_product(product_id, db)
    product_model.status = PRODUCT_STATUS.DRAFT
    await db.commit()
    return product_model


async def publish_products(product_ids: ListIdRequest, db: AsyncSession):
    await db.execute(update(Product).where(Product.id.in_(product_ids.ids)).values(status=PRODUCT_STATUS.PUBLISHED))
    await db.commit()
    return {"message": "Success"}


async def unpublish_products(product_ids: ListIdRequest, db: AsyncSession):
    await db.execute(update(Product).where(Product.id.in_(product_ids.ids)).values(status=PRODUCT_STATUS.DRAFT))
    await db.commit()
    return {"message": "Success"}


async def delete_product(product_id: int, db: AsyncSession):
    product_model = await get_product(product_id, db)
    await db.delete(product_model)
    await db.commit()
    return {"message": "Success"}


async def delete_products(product_ids: ListIdRequest, db: AsyncSession):
    await db.execute(delete(Product).where(Product.id.in_(product_ids.ids)))
    await db.commit()
    return {"message": "Success"}
