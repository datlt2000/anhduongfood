from pydantic import BaseModel
from .FileResponse import FileModelResponse
from typing import List
from src.const.enum import POST_STATUS
from datetime import date


class PostResponse(BaseModel):
    id: int
    title: str
    status: POST_STATUS
    description: str
    content: str
    images: List[FileModelResponse] = []
    createdAt: date