from pydantic import BaseModel


class FileModelResponse(BaseModel):
    url: str | None
    id: int
    type: str | None