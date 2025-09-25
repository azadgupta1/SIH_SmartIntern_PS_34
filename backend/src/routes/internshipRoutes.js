import express from 'express';
import { createInternship, getAllInternships } from '../controllers/internshipController.js';
import { authenticate } from '../middlewares/authMiddleware.js';


const router = express.Router();


router.post("/", authenticate, createInternship);
router.get("/", getAllInternships);


export default router;