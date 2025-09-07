from pydantic import BaseModel

class SkinToneResult(BaseModel):
    hex: str
    type: str

class RecommendationResult(BaseModel):
    skin_tone: SkinToneResult
    recommended_colors: list[str]

