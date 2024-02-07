from process import Process
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

ALL = ['*']
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALL,
    allow_methods=ALL,
    allow_headers=ALL,
    allow_credentials=True
)


@app.get('/shipment/{tracking_number}/')
async def get_tracking(tracking_number: str) -> dict:
    return await Process.get_tracking(tracking_number)
