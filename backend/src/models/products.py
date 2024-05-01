from sqlalchemy import Column, Integer, String

from src.models import database


class Product(database.Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    price = Column(String)
    wrap = Column(String)
    weight = Column(String)
    expired = Column(String)
    images = Column(String)
    description = Column(String)
