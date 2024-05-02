from pydantic import BaseModel


class PostRequest(BaseModel):
    title: str
    image: str
    status: str
    description: str
    content: str
