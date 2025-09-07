from typing import Optional
from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from jinja2 import Environment, FileSystemLoader

from logic.skin_tone import analyze_skin_tone
from logic.weather import get_weather_data
from logic.recommendations import get_recommended_colors
from logic.image_generator import generate_outfit_image
from models import RecommendationResult

app = FastAPI()

app.mount("/static", StaticFiles(directory="frontend"), name="static")

jinja_env = Environment(loader=FileSystemLoader("frontend"))

@app.get("/", response_class=HTMLResponse)
async def read_root():
    """
    Serve the main HTML page.
    """
    template = jinja_env.get_template("index.html")
    return template.render()

@app.post("/analyze", response_model=RecommendationResult)
async def analyze_image_and_get_recommendations(
    photo: UploadFile = File(...),
    city: str = Form(...),
    gender: str = Form(...),
    occasion: str = Form(...)
):
    """
    Main endpoint to process user inputs and return recommendations.
    """
    try:
        image_bytes = await photo.read()

        skin_tone_result = analyze_skin_tone(image_bytes)

        weather_text = get_weather_data(city)

        recommended_colors = get_recommended_colors(
            skin_tone_type=skin_tone_result.type,
            gender=gender,
            weather=weather_text,
            occasion=occasion
        )
        
        return RecommendationResult(
            skin_tone=skin_tone_result,
            recommended_colors=recommended_colors
        )
        
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")


@app.post("/generate-outfit")
async def generate_outfit(
    prompt: str = Form(...),
    city: str = Form(...),
    Negative_prompt: Optional[str] = None
):
    """
    Endpoint to generate a single outfit image from a prompt.
    """
    try:
        weather_info = get_weather_data(city)
        full_prompt = f"{prompt} , the outfit should be suitable for this climate :{weather_info}, Do Not Include : {Negative_prompt} "
        image_base64 = generate_outfit_image(full_prompt)
        if not image_base64:
            raise HTTPException(status_code=500, detail="Failed to generate outfit image from the API.")
        
        return {"image_base64": image_base64}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred during image generation: {str(e)}")