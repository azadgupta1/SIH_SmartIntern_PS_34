import express from 'express';
import { getRecommendations } from '../controllers/recommentController.js';
import { authenticate } from '../middlewares/authMiddleware.js';


const router = express.Router();


router.get("/", authenticate, getRecommendations);



export default router;