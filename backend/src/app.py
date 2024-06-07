from fastapi import FastAPI, APIRouter
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from api.admin import user_api, product_api as admin_product_api, post_api as admin_post_api
from api.guest import product_api, post_api
from src.models.database import Base, engine
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield


app = FastAPI(lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

admin_router = APIRouter(tags=["admin"])
guest_router = APIRouter(tags=["guest"])
admin_router.include_router(
    admin_product_api.router,
    prefix="/admin",
    tags=["product"],
)
admin_router.include_router(
    admin_post_api.router,
    prefix="/admin",
    tags=["post"],
)
admin_router.include_router(
    user_api.router,
    prefix="/admin",
    tags=["user"]
)
guest_router.include_router(
    product_api.router,
    tags=["product"],
    responses={418: {"description": "I'm a teapot"}},
)
guest_router.include_router(
    post_api.router,
    tags=["post"],
    responses={418: {"description": "I'm a teapot"}},
)
app.include_router(admin_router, prefix="/api")
app.include_router(guest_router, prefix="/api")


@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}
