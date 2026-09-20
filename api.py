from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from uuid import uuid4

from main import run_pipeline
from core.rag_engine import ask_question


app = FastAPI(title="VidSense API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


videos = {}


class AnalyzeRequest(BaseModel):
    source: str
    language: str = "english"


class QuestionRequest(BaseModel):
    video_id: str
    question: str


@app.get("/")
def root():
    return {"message": "VidSense API is running"}


@app.post("/analyze")
def analyze_video(request: AnalyzeRequest):

    result = run_pipeline(
        request.source,
        request.language
    )

    video_id = str(uuid4())

    videos[video_id] = {
        "title": result["title"],
        "transcript": result["transcript"],
        "summary": result["summary"],
        "action_items": result["action_items"],
        "key_decisions": result["key_decisions"],
        "open_questions": result["open_questions"],
        "rag_chain": result["rag_chain"],
    }

    return {
        "video_id": video_id,
        "title": result["title"],
        "summary": result["summary"],
        "action_items": result["action_items"],
        "key_decisions": result["key_decisions"],
        "open_questions": result["open_questions"],
    }


@app.get("/videos/{video_id}")
def get_video(video_id: str):

    video = videos.get(video_id)

    if not video:
        return {"error": "Video not found"}

    return {
        "video_id": video_id,
        "title": video["title"],
        "transcript": video["transcript"],
        "summary": video["summary"],
        "action_items": video["action_items"],
        "key_decisions": video["key_decisions"],
        "open_questions": video["open_questions"],
    }


@app.post("/ask")
def ask_video_question(request: QuestionRequest):

    video = videos.get(request.video_id)

    if not video:
        return {"error": "Video not found"}

    answer = ask_question(
        video["rag_chain"],
        request.question
    )

    return {
        "answer": answer
    }