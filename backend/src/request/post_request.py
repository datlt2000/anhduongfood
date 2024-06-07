from pydantic import BaseModel


class PostRequest(BaseModel):
    title: str
    status: str
    description: str
    content: str
