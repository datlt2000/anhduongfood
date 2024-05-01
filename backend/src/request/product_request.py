from pydantic import BaseModel, Field


class ProductRequest(BaseModel):
    title: str
    price: str | None = None
    wrap: str | None = None
    weight: str | None = None
    expired: str | None = None
    images: str
    description: str
