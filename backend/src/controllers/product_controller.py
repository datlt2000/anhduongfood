from fastapi import HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from src.const import path
from src.models.products import Product
from src.models.products import ProductImage
from src.request.product_request import ProductRequest
from src.response.ProductResponse import ProductResponse
import os
import pathlib
from datetime import datetime
from src.const import date_time


async def get_products(db: AsyncSession):
    results = await db.execute(select(Product))
    products = results.scalars().all()
    return products


async def get_product(product_id: int, db: AsyncSession) -> Product:
    product_model = await db.get(Product, product_id)
    if not product_model:
        raise HTTPException(
            status_code=404, detail=f"Id {product_id}: Does not exist")
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


async def delete_product(product_id: int, db: AsyncSession):
    product_model = await get_product(product_id, db)
    await db.delete(product_model)
    await db.commit()
    return {"message": "Success"}
