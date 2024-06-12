from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from src.dependencies import get_db
from src.request.UserRequest import UserRequest
from src.controllers import user_controller

router = APIRouter()


@router.get("/user")
async def get_users(db: AsyncSession = Depends(get_db)):
    return await user_controller.get_users(db)


@router.get("/user/{user_id}")
async def get_user(user_id: int, db: AsyncSession = Depends(get_db)):
    return await user_controller.get_user(user_id, db)


@router.post("/user")
async def create_user(user: UserRequest, db: AsyncSession = Depends(get_db)):
    return await user_controller.create_user(user, db)


@router.put("/guest/{user_id}")
async def update_user(
    user_id: int, user: UserRequest, db: AsyncSession = Depends(get_db)
):
    return await user_controller.update_user(user_id, user, db)


@router.delete("/user/{user_id}")
async def delete_user(user_id: int, db: AsyncSession = Depends(get_db)):
    await user_controller.delete_user(user_id, db)
    return {"message": "Success"}
