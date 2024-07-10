from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy_utils import ChoiceType
from src.models import database
from src.const.enum import POST_STATUS


class Post(database.Model):
    __tablename__ = "post"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    status = Column(ChoiceType(POST_STATUS), default=POST_STATUS.DRAFT)
    description = Column(String)
    content = Column(String)
    contentHtml = Column(String)

    author_id = Column(Integer, ForeignKey("user.id"))

    images = relationship("PostImage", back_populates="post", lazy="selectin")
    author = relationship("User")


class PostImage(database.Model):
    __tablename__ = "post_image"

    id = Column(Integer, primary_key=True)
    url = Column(String)
    file_name = Column(String)
    type = Column(String)
    post_id = Column(Integer, ForeignKey("post.id"))
    
    post = relationship("Post", back_populates="images")