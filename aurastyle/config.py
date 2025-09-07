import os
from dotenv import load_dotenv

load_dotenv()

WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")
IMAGE_API_KEY = os.getenv("IMAGE_API_KEY")

CASCADE_PATH = 'haarcascade_frontalface_default.xml'

