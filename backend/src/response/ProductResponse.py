from pydantic import BaseModel
from .FileResponse import FileModelResponse
from typing import List
from src.const.enum import PRODUCT_STATUS
from datetime import date


class ProductResponse(BaseModel):
    id: int
    title: str
    price: str | None = None
    wrap: str | None = None
    weight: str | None = None
    expired: str | None = None
    description: str | None
    status: PRODUCT_STATUS
    images: List[FileModelResponse] | None = []
    createdAt: date
