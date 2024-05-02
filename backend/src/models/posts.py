from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.orm import relationship
from sqlalchemy_utils import ChoiceType
from src.models import database
from src.const.enum import POST_STATUS


class Post(database.Base):
    __tablename__ = "post"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    createAt = Column(Date)
    updateAt = Column(Date)
    image = Column(String)
    status = Column(ChoiceType(POST_STATUS))
    read = Column(Integer, default=0)
    description = Column(String)
    content = Column(String)

    author_id = Column(Integer, ForeignKey("user.id"))

    author = relationship("User", back_populates="posts")
