from pydantic import BaseModel


class PostRequest(BaseModel):
    title: str
    description: str
    content: str | None
    contentHtml: str | None
