import requests
import json
from config import IMAGE_API_KEY
def generate_outfit_image(prompt: str) -> str | None:
    """
    Calls the Gemini API to generate an image based on a text prompt.
    """
    api_key = IMAGE_API_KEY
    api_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent?key={api_key}"

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]}
    }

    try:
        response = requests.post(
            api_url,
            headers={'Content-Type': 'application/json'},
            data=json.dumps(payload),
            timeout=60
        )
        response.raise_for_status()
        result = response.json()
        
        part = result.get('candidates', [{}])[0].get('content', {}).get('parts', [{}])[0]
        if 'inlineData' in part:
            image_data = part['inlineData']['data']
            mime_type = part['inlineData']['mimeType']
            return f"data:{mime_type};base64,{image_data}"
        else:
            print("No image data in API response:", result)
            return None
            
    except requests.exceptions.RequestException as e:
        print(f"API request failed: {e}")
        return None
    except (KeyError, IndexError) as e:
        print(f"Failed to parse API response: {e}")
        return None


