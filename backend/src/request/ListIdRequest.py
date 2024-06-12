from pydantic import BaseModel
from typing import List


class ListIdRequest(BaseModel):
    ids: List[int]
