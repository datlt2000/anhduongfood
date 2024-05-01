from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from src.models.products import Product
from src.request.product_request import ProductRequest


async def get_products(db: AsyncSession):
    results = await db.execute(select(Product))
    products = results.scalars().all()
    return products


async def get_product(product_id: int, db: AsyncSession):
    return await db.get(Product, product_id)


async def create_product(product: ProductRequest, db: AsyncSession):
    product_model = Product()
    product_model.title = product.title
    product_model.wrap = product.wrap
    product_model.weight = product.weight
    product_model.expired = product.expired
    product_model.price = product.price
    product_model.images = product.images
    product_model.description = product.description
    db.add(product_model)
    await db.commit()
    await db.refresh(product_model)
    return product


async def update_product(product_id: int, product: ProductRequest, db: AsyncSession):
    product_model = await db.get(Product, product_id)
    if not product_model:
        raise HTTPException(
            status_code=404,
            detail=f"Id {product_id}: Does not exist"
        )
    product_model.title = product.title
    product_model.wrap = product.wrap
    product_model.weight = product.weight
    product_model.expired = product.expired
    product_model.price = product.price
    product_model.images = product.images
    product_model.description = product.description
    db.add(product_model)
    await db.commit()
    return product


async def delete_product(product_id: int, db: AsyncSession):
    product_model = await db.get(Product, product_id)
    await db.delete(product_model)
    await db.commit()
    return {"message": "Success"}
