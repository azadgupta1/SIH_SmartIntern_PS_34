import prisma from "../config/prisma.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// export const register = async (req, res) => {
//   try {
//     const { name, email, password, education, skills, interests, location } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await prisma.user.create({
//       data: { name, email, password: hashedPassword, education, skills, interests, location },
//     });

//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     res.json({user, token});
//   } catch (err) {
//     res.status(500).json({ error: "Registration failed", details: err.message });
//   }
// };




export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      education = null,
      skills = [],
      interests = [],
      location = null,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        education,
        skills,
        interests,
        location,
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ user, token });
  } catch (err) {
    res.status(500).json({
      error: "Registration failed",
      details: err.message,
    });
  }
};





export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(404).json({ error: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};
