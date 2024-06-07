from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy_utils import ChoiceType
from sqlalchemy.orm import relationship
from src.const.enum import PRODUCT_STATUS
from src.models import database


class Product(database.Model):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    price = Column(String)
    wrap = Column(String)
    weight = Column(String)
    expired = Column(String)
    status = Column(ChoiceType(PRODUCT_STATUS), default=PRODUCT_STATUS.DRAFT)
    description = Column(String)
    images = relationship("ProductImage", back_populates="product", lazy="selectin")


class ProductImage(database.Model):
    __tablename__ = "product_image"

    id = Column(Integer, primary_key=True)
    url = Column(String)
    file_name = Column(String)
    type = Column(String)
    product_id = Column(Integer, ForeignKey("product.id"))
    
    product = relationship("Product", back_populates="images")