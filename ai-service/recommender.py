# # recommender.py
# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
# import numpy as np

# def preprocess_internships(csv_path=r"SIH_SmartIntern_PS_34\ai-service\data\internship.csv"):
#     """Load internships dataset and fill missing values"""
#     df = pd.read_csv(csv_path)
#     df["skillsNeeded"] = df["skillsNeeded"].fillna("")
#     df["description"] = df["description"].fillna("")
#     df["category"] = df["category"].fillna("")
#     df["location"] = df["location"].fillna("")
#     return df

# def recommend(user, internships_df, top_n=5):
#     """
#     Recommend internships for a given user profile.
#     Weighting scheme:
#       - Skills + Interests from user: 75%
#       - Internship category: 15%
#       - Location bonus: 10%
#     """
#     print("User is : ", user)
#     # Combine text columns with weighting by repeating important features
#     user_skills_text = " ".join(user.get("skills", []))
#     print("User Skill is : ",user_skills_text)
#     user_interests_text = " ".join(user.get("interests", []))
#     user_profile_text = (user_skills_text + " " + user_interests_text)

#     # Repeat category for weighting (adjust factor to give ~15% weight)
#     internships_df["weighted_text"] = (
#         internships_df["skillsNeeded"] * 3 +  # prioritize skillsNeeded
#         internships_df["category"] * 1 +      # moderate weight to category
#         internships_df["description"] * 1     # rest of text
#     )

#     # TF-IDF Vectorization
#     vectorizer = TfidfVectorizer(stop_words="english")
#     internship_matrix = vectorizer.fit_transform(internships_df["weighted_text"])
#     user_vector = vectorizer.transform([user_profile_text])

#     # Cosine similarity
#     scores = cosine_similarity(user_vector, internship_matrix).flatten()

#     # Location bonus
#     if user.get("location"):
#         location_bonus = 0.1  # 10% bonus
#         location_mask = internships_df["location"].str.lower() == user["location"].lower()
#         scores += location_bonus * location_mask.astype(float)

#     # Add scores to dataframe
#     internships_df["score"] = scores

#     # Get top N results
#     top_matches = internships_df.sort_values(by="score", ascending=False).head(top_n)

#     # Return selected columns
#     results = top_matches[["id", "title", "companyName","skillsNeeded", "location", "score", "category"]].to_dict(orient="records")
#     return results







































# recommender.py
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def preprocess_internships(csv_path=r"SIH_SmartIntern_PS_34\ai-service\data\internship.csv"):
    """Load internships dataset and fill missing values"""
    df = pd.read_csv(csv_path)
    df["skillsNeeded"] = df["skillsNeeded"].fillna("")
    df["description"] = df["description"].fillna("")
    df["category"] = df["category"].fillna("")
    df["location"] = df["location"].fillna("")
    return df

def recommend(user, internships_df, top_n=5):
    """
    Recommend internships for a given user profile.
    Weighting scheme:
      - Skills + Interests from user: 75%
      - Internship category: 15%
      - Location bonus: 10%
    """
    # Extract the actual user dictionary
    user_data = user.get("user", {})
    print("User is:", user_data)

    # Extract skills and interests properly
    user_skills_text = " ".join(user_data.get("skills", []))
    user_interests_text = " ".join(user_data.get("interests", []))
    user_profile_text = user_skills_text + " " + user_interests_text
    print("User Profile Text:", user_profile_text)

    # Combine text columns in internships for weighted TF-IDF
    internships_df["weighted_text"] = (
        internships_df["skillsNeeded"] * 3 +  # prioritize skillsNeeded
        internships_df["category"] * 1 +      # moderate weight to category
        internships_df["description"] * 1     # rest of text
    )

    # TF-IDF Vectorization
    vectorizer = TfidfVectorizer(stop_words="english")
    internship_matrix = vectorizer.fit_transform(internships_df["weighted_text"])
    user_vector = vectorizer.transform([user_profile_text])

    # Cosine similarity
    scores = cosine_similarity(user_vector, internship_matrix).flatten()

    # Location bonus (10%)
    if user_data.get("location"):
        location_bonus = 0.1
        location_mask = internships_df["location"].str.lower() == user_data["location"].lower()
        scores += location_bonus * location_mask.astype(float)

    # Add scores to dataframe
    internships_df["score"] = scores

    # Get top N results
    top_matches = internships_df.sort_values(by="score", ascending=False).head(top_n)

    # Return selected columns
    results = top_matches[["id", "title", "companyName", "skillsNeeded", "location", "score", "category"]].to_dict(orient="records")
    return results
