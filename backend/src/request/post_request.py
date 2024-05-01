from pydantic import BaseModel, Field
from datetime import date


class PostRequest(BaseModel):
    title: str
    image: str
    status: str
    description: str
    content: str
