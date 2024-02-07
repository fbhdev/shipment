import requests
from dotenv import load_dotenv
import os


class Scraper:
    load_dotenv()
    API_KEY = os.getenv("API_KEY")

    @staticmethod
    async def results(tracking_number: str) -> dict:
        if not tracking_number:
            return {}
        response = requests.get(
            f'https://api.ship24.com/public/v1/trackers/search/{tracking_number}/results',
            headers={'Authorization': f'Bearer {Scraper.API_KEY}'}
        ).json()
        return response
