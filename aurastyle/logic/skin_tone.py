import cv2
import numpy as np
from sklearn.cluster import KMeans
from config import CASCADE_PATH
from models import SkinToneResult

def analyze_skin_tone(image_bytes: bytes) -> SkinToneResult:
    image_np = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(image_np, cv2.IMREAD_COLOR)
    face_cascade = cv2.CascadeClassifier(CASCADE_PATH)

    if face_cascade.empty():
        raise ValueError("Could not load Haar Cascade classifier.")
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    if len(faces) == 0:
        h, w, _ = img.shape
        face_roi = img[h//4:3*h//4, w//4:3*w//4]
    else:
        x, y, w, h = faces[0]
        face_roi = img[y:y+h, x:x+w]
    pixels = face_roi.reshape((-1, 3)).astype(np.float32)
    k = 5
    kmeans = KMeans(n_clusters=k, n_init=10, random_state=42)
    kmeans.fit(pixels)
    centroids = kmeans.cluster_centers_

    best_centroid = None
    max_score = -1
    for c in centroids:
        luma = 0.299 * c[2] + 0.587 * c[1] + 0.114 * c[0] 
        if 50 < luma < 220 and c[2] > c[0]: 
            if luma > max_score:
                max_score = luma
                best_centroid = c
    
    if best_centroid is None: 
        best_centroid = sorted(centroids, key=lambda c: c.sum(), reverse=True)[k//2]

    rgb = [int(c) for c in reversed(best_centroid)]
    hex_code = f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}"

    luma_final = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]
    tone_type = 'medium'
    if luma_final > 170: tone_type = 'light'
    if luma_final < 90: tone_type = 'dark'

    return SkinToneResult(hex=hex_code, type=tone_type)

