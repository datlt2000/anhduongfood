import datetime

from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from src.models.posts import Post
from src.request.post_request import PostRequest
from src.const.enum import POST_STATUS


async def get_posts(db: AsyncSession):
    results = await db.execute(select(Post))
    posts = results.scalars().all()
    return posts


async def get_post(post_id: int, db: AsyncSession):
    return await db.get(Post, post_id)


async def create_post(post: PostRequest, db: AsyncSession):
    post_model = Post()
    post_model.title = post.title
    post_model.description = post.description
    post_model.content = post.content
    post_model.createAt = datetime.datetime.now()
    post_model.updateAt = post_model.createAt
    post_model.image = post_model.image
    post_model.status = POST_STATUS.PENDING
    db.add(post_model)
    await db.commit()
    await db.refresh(post_model)
    return post


async def update_post(post_id: int, post: PostRequest, db: AsyncSession):
    post_model = await db.get(Post, post_id)
    if not post_model:
        raise HTTPException(
            status_code=404,
            detail=f"Id {post_id}: Does not exist"
        )
    post_model.title = post.title
    post_model.description = post.description
    post_model.content = post.content
    post_model.updateAt = datetime.datetime.now()
    post_model.image = post_model.image
    db.add(post_model)
    await db.commit()
    return post


async def delete_post(post_id: int, db: AsyncSession):
    post_model = await db.get(Post, post_id)
    await db.delete(post_model)
    await db.commit()
    return {"message": "Success"}
