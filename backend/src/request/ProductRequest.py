from pydantic import BaseModel


class ProductRequest(BaseModel):
    title: str
    price: str | None = None
    wrap: str | None = None
    weight: str | None = None
    expired: str | None = None
    description: str | None
    descriptionHtml: str | None
