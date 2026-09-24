# VidSense

AI-powered video and meeting assistant that converts videos into structured, searchable insights

## Features

* Transcribes YouTube videos and local audio/video using Whisper
* Generates summaries, action items, key decisions, and open questions
* Supports English and Hinglish input
* Enables question-answering over transcripts using RAG
* Streamlit interface for interacting with processed videos

## Tech Stack

* Python
* Whisper
* LangChain
* Mistral AI
* ChromaDB
* Hugging Face
* Streamlit
* yt-dlp

## Setup

```bash
git clone https://github.com/D4rsh11/VidSense.git
cd VidSense

pip install -r Requirements.txt
```

Create a `.env` file and add the required API credentials.

## Run

```bash
streamlit run app.py
```

## Usage

1. Provide a YouTube URL or upload a local media file.
2. VidSense transcribes the audio using Whisper.
3. The transcript is processed to generate structured insights.
4. Ask questions about the video using the RAG-powered Q&A system.
