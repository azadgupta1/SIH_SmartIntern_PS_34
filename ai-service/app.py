# app.py
from fastapi import FastAPI
from recommender import preprocess_internships, recommend

app = FastAPI(title="AI Recommendation Service")

# Load dataset once at startup
internships_df = preprocess_internships("data/internship.csv")

@app.post("/recommend")
def get_recommendation(user: dict):
    """
    Input: { "education": "B.Tech", "skills": ["Python","SQL"], "interests": ["AI"], "location": "Delhi" }
    Output: [{id, title, companyName, location, score}, ...]
    """
    recs = recommend(user, internships_df)
    return {"recommendations": recs}
