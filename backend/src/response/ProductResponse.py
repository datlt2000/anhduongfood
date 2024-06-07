from pydantic import BaseModel
from .FileResponse import FileModelResponse
from typing import List
from src.const.enum import PRODUCT_STATUS
from datetime import date

class ProductResponse(BaseModel):
    title: str
    price: str | None = None
    wrap: str | None = None
    weight: str | None = None
    expired: str | None = None
    description: str
    staus: PRODUCT_STATUS
    images: List[FileModelResponse] = []
    createdAt: date
