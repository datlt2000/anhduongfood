from pydantic import BaseModel


class UserRequest(BaseModel):
    email: str
    first_name: str
    last_name: str
    password: str
