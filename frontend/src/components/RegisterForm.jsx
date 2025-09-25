import React, { useState, useEffect } from "react";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    education: "",
    skills: [],
    interests: [],
    location: "",
  });
  const [skillInput, setSkillInput] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const checkStrength = (password) => {
    const strongRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (strongRegex.test(password)) {
      setPasswordStrength("strong");
    } else if (mediumRegex.test(password)) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("weak");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") checkStrength(value);

    if (name === "confirmPassword" || name === "password") {
      if (formData.confirmPassword && value !== formData.password) {
        setPasswordMatch("mismatch");
      } else if (formData.confirmPassword && value === formData.password) {
        setPasswordMatch("match");
      }
    }
  };

  const addSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput.trim()],
      });
      setSkillInput("");
    }
  };

  const addInterest = (e) => {
    e.preventDefault();
    if (interestInput.trim()) {
      setFormData({
        ...formData,
        interests: [...formData.interests, interestInput.trim()],
      });
      setInterestInput("");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#f4f9ff] px-4"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-[#005cab] mb-2">
        SmartIntern
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-6">
        Register your profile to access opportunities
      </p>

      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg w-full max-w-2xl">
        <div className="bg-[#005cab] text-white p-5 rounded-t-xl">
          <h1 className="text-xl font-semibold">Registration Form</h1>
          <p className="text-sm">
            {step === 1
              ? "Step 1 of 2: Basic Information"
              : "Step 2 of 2: Additional Details"}
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-center mb-6">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                step === 1
                  ? "bg-[#005cab] text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              1
            </div>
            <div className="w-12 h-[2px] bg-gray-400 mx-2"></div>
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                step === 2
                  ? "bg-[#005cab] text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              2
            </div>
          </div>

          {step === 1 ? (
            <>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 mb-4"
                placeholder="Enter your full name"
              />

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 mb-4"
                placeholder="Enter your email address"
              />

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 mb-2"
                placeholder="Create a strong password"
              />
              {passwordStrength && (
                <p
                  className={`text-sm mb-4 ${
                    passwordStrength === "weak"
                      ? "text-red-500"
                      : passwordStrength === "medium"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {passwordStrength === "weak" &&
                    "Weak ❌ (min 8 chars, 1 capital, 1 number, 1 special char)"}
                  {passwordStrength === "medium" &&
                    "Medium ⚠ (add a special character for strong password)"}
                  {passwordStrength === "strong" && "Strong ✔"}
                </p>
              )}

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 mb-2"
                placeholder="Re-enter your password"
              />
              {passwordMatch && (
                <p
                  className={`text-sm mb-4 ${
                    passwordMatch === "mismatch"
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {passwordMatch === "mismatch"
                    ? "Passwords do not match ❌"
                    : "Passwords match ✔"}
                </p>
              )}

              <button
                onClick={() => setStep(2)}
                className="w-full bg-[#005cab] text-white py-3 rounded-md font-semibold hover:bg-[#004080]"
              >
                Continue to Additional Details
              </button>
            </>
          ) : (
            <>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Education
              </label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 mb-4"
              >
                <option value="">Select your education level</option>
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Skills
              </label>
              <div className="flex mb-4">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md p-3"
                  placeholder="Add a skill (e.g., Python)"
                />
                <button
                  onClick={addSkill}
                  className="ml-2 bg-[#ff7500] text-white px-4 rounded-md hover:bg-[#e06600]"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#005cab] text-white rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Interests
              </label>
              <div className="flex mb-4">
                <input
                  type="text"
                  value={interestInput}
                  onChange={(e) => setInterestInput(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md p-3"
                  placeholder="Add an interest (e.g., AI)"
                />
                <button
                  onClick={addInterest}
                  className="ml-2 bg-[#ff7500] text-white px-4 rounded-md hover:bg-[#e06600]"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#005cab] text-white rounded-md text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 mb-6"
                placeholder="Enter your city (e.g., Delhi)"
              />

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
                >
                  Back
                </button>
                <button className="px-6 py-2 bg-[#005cab] text-white rounded-md font-semibold hover:bg-[#004080]">
                  Complete Registration
                </button>
              </div>
            </>
          )}

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-[#005cab] font-semibold">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
