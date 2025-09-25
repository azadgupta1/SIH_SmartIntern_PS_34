import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import internshipRoutes from './routes/internshipRoutes.js';
import recommendRoutes from './routes/recommendRoutes.js';


dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to SmartIntern!!");
});

app.use("/api/auth", authRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/recommend", recommendRoutes);


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});