import json
import base64
import os
import time
from logic.skin_tone import analyze_skin_tone
from logic.weather import get_weather_data
from logic.recommendations import get_recommended_colors
from logic.image_generator import generate_outfit_image
from models import RecommendationResult

INPUT_FILE = "input.json"
OUTPUT_FILE = "output.json"

def process_analyze_inputs(data):
    try:
        image_bytes = base64.b64decode(data["photo"].split(",")[1]) 
        city = data["city"]
        gender = data["gender"]
        occasion = data["occasion"]

        skin_tone_result = analyze_skin_tone(image_bytes)
        weather_text = get_weather_data(city)
        recommended_colors = get_recommended_colors(
            skin_tone_type=skin_tone_result.type,
            gender=gender,
            weather=weather_text,
            occasion=occasion
        )

        result = RecommendationResult(
            skin_tone=skin_tone_result,
            recommended_colors=recommended_colors
        )

        with open(OUTPUT_FILE, "w") as f:
            json.dump({
                "status": "success",
                "type": "analyze",
                "skin_tone": str(result.skin_tone),
                "recommended_colors": recommended_colors
            }, f)

    except Exception as e:
        with open(OUTPUT_FILE, "w") as f:
            json.dump({"status": "error", "message": str(e)}, f)

def process_outfit_inputs(data):
    try:
        prompt = data["prompt"]
        city = data["city"]
        negative_prompt = data.get("negative_prompt") or None

        weather_info = get_weather_data(city)
        full_prompt = f"{prompt}, the outfit should be suitable for this climate: {weather_info}, Do Not Include: {negative_prompt or 'None'}"

        image_base64 = generate_outfit_image(full_prompt)

        if not image_base64:
            raise ValueError("Failed to generate outfit image.")

        with open(OUTPUT_FILE, "w") as f:
            json.dump({
                "status": "success",
                "type": "outfit",
                "image_base64": image_base64
            }, f)

    except Exception as e:
        with open(OUTPUT_FILE, "w") as f:
            json.dump({"status": "error", "message": str(e)}, f)

def main():
    print("Starting local outfit recommendation processor...")
    print(f"Monitoring for input file: {INPUT_FILE}")
    print(f"Results will be written to: {OUTPUT_FILE}")

    while True:
        if os.path.exists(INPUT_FILE):
            try:
                with open(INPUT_FILE, "r") as f:
                    data = json.load(f)

                action = data.get("action")
                if action == "analyze":
                    print("Processing analysis request...")
                    process_analyze_inputs(data)
                elif action == "outfit":
                    print("Processing outfit generation request...")
                    process_outfit_inputs(data)
                else:
                    with open(OUTPUT_FILE, "w") as f:
                        json.dump({"status": "error", "message": "Invalid action"}, f)

                os.remove(INPUT_FILE)
                print("Request processed. Waiting for next input...")

            except Exception as e:
                with open(OUTPUT_FILE, "w") as f:
                    json.dump({"status": "error", "message": f"Error processing input: {str(e)}"}, f)
                if os.path.exists(INPUT_FILE):
                    os.remove(INPUT_FILE)

        time.sleep(1) 

if __name__ == "__main__":
    main()