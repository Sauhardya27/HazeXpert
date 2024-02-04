from fastapi import FastAPI, File, UploadFile
from io import BytesIO
import subprocess
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/process_video")
async def process_video(video: UploadFile = File(...)):
    # Read the video from the request
    video_bytes = await video.read()
    video_stream = BytesIO(video_bytes)

    # Save the video file locally
    with open("video.mp4", "wb") as f:
        f.write(video_bytes)

    # Call the Python script to process the video
    subprocess.call(["python", "main.py", "video.mp4", "processed_video.mp4"])

    # Read the processed video file
    with open("processed_video.mp4", "rb") as f:
        processed_video_bytes = f.read()

    # Return the processed video
    return {"processed_video": processed_video_bytes}