from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from src.models.users import User
from src.request.UserRequest import UserRequest


async def get_users(db: AsyncSession):
    results = await db.execute(select(User))
    users = results.scalars().all()
    return users


async def get_user(user_id: int, db: AsyncSession):
    return await db.get(User, user_id)


async def create_user(user: UserRequest, db: AsyncSession):
    user_dict = user.model_dump(exclude={"password"})
    user_model = User(**user_dict)
    user_model.hashed_password = user.password
    db.add(user_model)
    await db.commit()
    await db.refresh(user_model)
    return user


async def update_user(user_id: int, user: UserRequest, db: AsyncSession):
    user_model = await db.get(User, user_id)
    if not user_model:
        raise HTTPException(
            status_code=404,
            detail=f"Id {user_id}: Does not exist"
        )
    user_model.hashed_password = user.password
    db.add(user_model)
    await db.commit()
    return user


async def delete_user(user_id: int, db: AsyncSession):
    user_model = await db.get(User, user_id)
    await db.delete(user_model)
    await db.commit()
    return {"message": "Success"}
