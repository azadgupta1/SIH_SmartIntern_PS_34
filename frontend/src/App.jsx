import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
