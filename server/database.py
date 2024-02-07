import pymongo
from pymongo.results import UpdateResult, DeleteResult, InsertOneResult
from bson import ObjectId


class Database:

    def __init__(self, url: str, db_name: str):
        self.client = pymongo.MongoClient(url)
        self.database = self.client[db_name]
        self._collection = None

    def __enter__(self) -> 'Database':
        return self

    def __exit__(self, exc_type, exc_val, exc_tb) -> None:
        self.client.close()

    @property
    def collection(self) -> pymongo.collection.Collection:
        return self._collection

    @collection.setter
    def collection(self, value: str) -> None:
        self._collection = self.database[value]

    async def insert_document(self, data: dict) -> InsertOneResult:
        return self.collection.insert_one(data)

    async def find_documents(self, query=None) -> list:
        if query is None:
            query = {}
        results = list(self.collection.find(query))
        return await Database.convert_ids(results)

    @staticmethod
    async def convert_ids(results: list) -> list:
        for item in results:
            if not isinstance(item['_id'], ObjectId):
                continue
            item['_id'] = str(item['_id'])
        return results

    async def update_document(self, query: dict, data: dict, delete: bool = False) -> UpdateResult:
        return self.collection.update_one(
            query, {'$unset': data} if delete else {'$set': data}
        )

    async def delete_document(self, query: dict) -> DeleteResult:
        return self.collection.delete_one(query)

    async def delete_many(self) -> DeleteResult:
        return self.collection.delete_many({})

    async def count_documents(self, query=None) -> int:
        if query is None:
            query = {}
        return self.collection.count_documents(query)
