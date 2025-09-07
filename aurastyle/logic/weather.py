import requests
from config import WEATHER_API_KEY

def get_weather_data(city: str):
    """
    Fetches a simple weather description for a given city.
    """
    if not WEATHER_API_KEY:
        raise ValueError("WEATHER_API_KEY not found. Please set it in your .env file.")

    url = f"https://api.tomorrow.io/v4/weather/realtime?location={city}&apikey={WEATHER_API_KEY}"
    
    try:
        response = requests.get(url)
        response.raise_for_status()  
        data = response.json()

        weather_text = data.get('current', {}).get('condition', {}).get('text', 'Clear')
        return weather_text
    except requests.exceptions.RequestException as e:
        raise ValueError(f"Failed to fetch weather data: {e}")
    except (KeyError, IndexError):
        raise ValueError("Could not parse weather data from API response.")
