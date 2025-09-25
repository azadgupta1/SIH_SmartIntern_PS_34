import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import Logo from "../assets/logo.png";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Save token to localStorage
      localStorage.setItem("token", data.token);

      // alert("Login successful!");
      window.location.href = "/dashboard"; // redirect after login
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-[#EFF6FF] px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Logo / Image */}
        <div className="hidden lg:flex items-center justify-center bg-[#1E3A8A] p-10 relative">
          <div className="text-center text-white space-y-4">
            <img
              src={Logo}
              alt="SmartIntern Logo"
              className="mx-auto w-32 h-32 object-contain"
            />
            <h2 className="text-2xl font-bold">Welcome to SmartIntern</h2>
            <p className="text-gray-200 text-sm max-w-sm mx-auto">
              Empowering students to explore opportunities and build their
              careers.
            </p>
          </div>
          <div className="absolute bottom-6 text-xs text-gray-300">
            © 2025 SmartIntern
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#1E3A8A]">Login</h1>
              <p className="text-gray-600 mt-2 text-sm">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-300 focus:border-[#1E3A8A] focus:ring-[#1E3A8A] text-sm shadow-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-300 focus:border-[#1E3A8A] focus:ring-[#1E3A8A] text-sm shadow-sm"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1E3A8A] text-white py-3 px-4 rounded-xl font-semibold shadow-md hover:bg-[#163172] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E3A8A] transition disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Links */}
            <div className="mt-6 text-center text-sm text-gray-600 space-y-2">
              <a
                href="/forgot-password"
                className="text-[#F97316] font-medium hover:underline"
              >
                Forgot Password?
              </a>
              <p>
                Don’t have an account?{" "}
                <a
                  href="/register"
                  className="text-[#F97316] font-medium hover:underline"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
