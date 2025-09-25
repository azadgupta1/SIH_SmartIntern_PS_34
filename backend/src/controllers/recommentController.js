import axios from "axios";
import prisma from "../config/prisma.js";


export const getRecommendations = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    console.log("User is ", user);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Call Python AI service
    const response = await axios.post("http://localhost:8000/recommend", { user });
    const recommendations = response.data.recommendations;

    // // Save top 5 in DB
    // await prisma.recommendation.deleteMany({ where: { userId: user.id } });
    // const savedRecs = await prisma.recommendation.createMany({
    //   data: recommendations.map(r => ({
    //     userId: user.id,
    //     internshipId: r.id,
    //     score: r.score,
    //   })),
    // });

    res.json(recommendations);
  } catch (err) {
    console.log("Error message : ", err.message);
    res.status(500).json({ error: "Recommendation service failed", details: err.message });
  }
};
