import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}
