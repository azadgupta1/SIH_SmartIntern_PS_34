import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import prisma from '../config/prisma.js';



export const createInternship = async (req, res) => {
  try {
    const { title, description, skillsNeeded, category, location, companyName } = req.body;

    const internship = await prisma.internship.create({
      data: { title, description, skillsNeeded, category, location, companyName, postedBy: req.user.id },
    });

    res.json(internship);
  } catch (err) {
    res.status(500).json({ error: "Failed to create internship" });
  }
};

export const getAllInternships = async (req, res) => {
  try {
    const internships = await prisma.internship.findMany();
    res.json(internships);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch internships" });
  }
};
