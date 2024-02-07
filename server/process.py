import os
from dotenv import load_dotenv
from database import Database
from scraper import Scraper
from utils import Status
from template import Template


class Process:
    load_dotenv()
    _MONGO_URI: str = os.getenv('MONGO_URI')
    _DB_NAME: str = os.getenv('DB_NAME')
    _INSTANCE: 'Process' = None
    _DB = Database(_MONGO_URI, _DB_NAME)

    def __new__(cls, *args, **kwargs) -> 'Process':
        if not cls._INSTANCE:
            cls._instance = super(Process, cls).__new__(cls, *args, **kwargs)
        return cls._INSTANCE

    @staticmethod
    async def get_tracking(tracking_number: str) -> dict:
        if not tracking_number:
            return Process.on_error()
        results = await Scraper.results(tracking_number)
        if not results:
            return Process.on_error()
        return Template.generate(status=Status.OK, results=[results])

    @staticmethod
    async def results(collection: str) -> dict:
        if not collection:
            return Process.on_error()
        Process._DB.collection = collection
        results = await Process._DB.find_documents()
        if not results:
            return Process.on_error()
        return Template.generate(status=Status.OK, results=results)

    @staticmethod
    def on_error() -> dict:
        return Template.generate(status=Status.INTERNAL_SERVER_ERROR)
