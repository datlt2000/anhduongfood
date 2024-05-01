from pydantic import BaseModel, Field


class UserRequest(BaseModel):
    email: str
    first_name: str
    last_name: str
    hashed_password: str
