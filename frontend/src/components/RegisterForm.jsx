// // import React, { useState, useEffect } from "react";

// // export default function RegistrationForm() {
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //     education: "",
// //     skills: [],
// //     interests: [],
// //     location: "",
// //   });
// //   const [skillInput, setSkillInput] = useState("");
// //   const [interestInput, setInterestInput] = useState("");
// //   const [passwordStrength, setPasswordStrength] = useState("");
// //   const [passwordMatch, setPasswordMatch] = useState("");

// //   useEffect(() => {
// //     const link = document.createElement("link");
// //     link.href =
// //       "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap";
// //     link.rel = "stylesheet";
// //     document.head.appendChild(link);
// //   }, []);

// //   const checkStrength = (password) => {
// //     const strongRegex =
// //       /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// //     const mediumRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

// //     if (strongRegex.test(password)) {
// //       setPasswordStrength("strong");
// //     } else if (mediumRegex.test(password)) {
// //       setPasswordStrength("medium");
// //     } else {
// //       setPasswordStrength("weak");
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });

// //     if (name === "password") checkStrength(value);

// //     if (name === "confirmPassword" || name === "password") {
// //       if (formData.confirmPassword && value !== formData.password) {
// //         setPasswordMatch("mismatch");
// //       } else if (formData.confirmPassword && value === formData.password) {
// //         setPasswordMatch("match");
// //       }
// //     }
// //   };

// //   const addSkill = (e) => {
// //     e.preventDefault();
// //     if (skillInput.trim()) {
// //       setFormData({
// //         ...formData,
// //         skills: [...formData.skills, skillInput.trim()],
// //       });
// //       setSkillInput("");
// //     }
// //   };

// //   const addInterest = (e) => {
// //     e.preventDefault();
// //     if (interestInput.trim()) {
// //       setFormData({
// //         ...formData,
// //         interests: [...formData.interests, interestInput.trim()],
// //       });
// //       setInterestInput("");
// //     }
// //   };

// //   return (
// //     <div
// //       className="min-h-screen flex flex-col items-center justify-center bg-[#f4f9ff] px-4"
// //       style={{ fontFamily: "Poppins, sans-serif" }}
// //     >
// //       <h1 className="text-2xl md:text-3xl font-bold text-[#005cab] mb-2">
// //         SmartIntern
// //       </h1>
// //       <p className="text-sm md:text-base text-gray-600 mb-6">
// //         Register your profile to access opportunities
// //       </p>

// //       <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg w-full max-w-md">
// //         <div className="bg-[#005cab] text-white p-5 rounded-t-xl">
// //           <h1 className="text-xl font-semibold">Registration Form</h1>
// //           <p className="text-sm">
// //             {step === 1
// //               ? "Step 1 of 2: Basic Information"
// //               : "Step 2 of 2: Additional Details"}
// //           </p>
// //         </div>

// //         <div className="p-6 md:p-8">
// //           <div className="flex items-center justify-center mb-6">
// //             <div
// //               className={`w-8 h-8 flex items-center justify-center rounded-full ${
// //                 step === 1
// //                   ? "bg-[#005cab] text-white"
// //                   : "bg-gray-300 text-gray-600"
// //               }`}
// //             >
// //               1
// //             </div>
// //             <div className="w-12 h-[2px] bg-gray-400 mx-2"></div>
// //             <div
// //               className={`w-8 h-8 flex items-center justify-center rounded-full ${
// //                 step === 2
// //                   ? "bg-[#005cab] text-white"
// //                   : "bg-gray-300 text-gray-600"
// //               }`}
// //             >
// //               2
// //             </div>
// //           </div>

// //           {step === 1 ? (
// //             <>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Full Name *
// //               </label>
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 value={formData.fullName}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-md p-3 mb-4"
// //                 placeholder="Enter your full name"
// //               />

// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Email Address *
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-md p-3 mb-4"
// //                 placeholder="Enter your email address"
// //               />

// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Password *
// //               </label>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-md p-3 mb-2"
// //                 placeholder="Create a strong password"
// //               />
// //               {passwordStrength && (
// //                 <p
// //                   className={`text-sm mb-4 ${
// //                     passwordStrength === "weak"
// //                       ? "text-red-500"
// //                       : passwordStrength === "medium"
// //                       ? "text-yellow-600"
// //                       : "text-green-600"
// //                   }`}
// //                 >
// //                   {passwordStrength === "weak" &&
// //                     "Weak ❌ (min 8 chars, 1 capital, 1 number, 1 special char)"}
// //                   {passwordStrength === "medium" &&
// //                     "Medium ⚠ (add a special character for strong password)"}
// //                   {passwordStrength === "strong" && "Strong ✔"}
// //                 </p>
// //               )}

// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Confirm Password *
// //               </label>
// //               <input
// //                 type="password"
// //                 name="confirmPassword"
// //                 value={formData.confirmPassword}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-md p-3 mb-2"
// //                 placeholder="Re-enter your password"
// //               />
// //               {passwordMatch && (
// //                 <p
// //                   className={`text-sm mb-4 ${
// //                     passwordMatch === "mismatch"
// //                       ? "text-red-500"
// //                       : "text-green-600"
// //                   }`}
// //                 >
// //                   {passwordMatch === "mismatch"
// //                     ? "Passwords do not match ❌"
// //                     : "Passwords match ✔"}
// //                 </p>
// //               )}

// //               <button
// //                 onClick={() => setStep(2)}
// //                 className="w-full bg-[#005cab] text-white py-3 rounded-md font-semibold hover:bg-[#004080]"
// //               >
// //                 Continue to Additional Details
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Education
// //               </label>
// //               <select
// //                 name="education"
// //                 value={formData.education}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-md p-3 mb-4"
// //               >
// //                 <option value="">Select your education level</option>
// //                 <option value="High School">High School</option>
// //                 <option value="Undergraduate">Undergraduate</option>
// //                 <option value="Graduate">Graduate</option>
// //                 <option value="Postgraduate">Postgraduate</option>
// //               </select>

// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Skills
// //               </label>
// //               <div className="flex mb-4">
// //                 <input
// //                   type="text"
// //                   value={skillInput}
// //                   onChange={(e) => setSkillInput(e.target.value)}
// //                   className="flex-1 border border-gray-300 rounded-md p-3"
// //                   placeholder="Add a skill (e.g., Python)"
// //                 />
// //                 <button
// //                   onClick={addSkill}
// //                   className="ml-2 bg-[#ff7500] text-white px-4 rounded-md hover:bg-[#e06600]"
// //                 >
// //                   Add
// //                 </button>
// //               </div>
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 {formData.skills.map((skill, idx) => (
// //                   <span
// //                     key={idx}
// //                     className="px-2 py-1 bg-[#005cab] text-white rounded-md text-sm"
// //                   >
// //                     {skill}
// //                   </span>
// //                 ))}
// //               </div>

// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Interests
// //               </label>
// //               <div className="flex mb-4">
// //                 <input
// //                   type="text"
// //                   value={interestInput}
// //                   onChange={(e) => setInterestInput(e.target.value)}
// //                   className="flex-1 border border-gray-300 rounded-md p-3"
// //                   placeholder="Add an interest (e.g., AI)"
// //                 />
// //                 <button
// //                   onClick={addInterest}
// //                   className="ml-2 bg-[#ff7500] text-white px-4 rounded-md hover:bg-[#e06600]"
// //                 >
// //                   Add
// //                 </button>
// //               </div>
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 {formData.interests.map((interest, idx) => (
// //                   <span
// //                     key={idx}
// //                     className="px-2 py-1 bg-[#005cab] text-white rounded-md text-sm"
// //                   >
// //                     {interest}
// //                   </span>
// //                 ))}
// //               </div>

// //               <label className="block mb-2 text-sm font-medium text-gray-700">
// //                 Location
// //               </label>
// //               <input
// //                 type="text"
// //                 name="location"
// //                 value={formData.location}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-md p-3 mb-6"
// //                 placeholder="Enter your city (e.g., Delhi)"
// //               />

// //               <div className="flex justify-between">
// //                 <button
// //                   onClick={() => setStep(1)}
// //                   className="px-6 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
// //                 >
// //                   Back
// //                 </button>
// //                 <button className="px-6 py-2 bg-[#005cab] text-white rounded-md font-semibold hover:bg-[#004080]">
// //                   Complete Registration
// //                 </button>
// //               </div>
// //             </>
// //           )}

// //           <p className="text-center text-sm text-gray-600 mt-6">
// //             Already have an account?{" "}
// //             <a href="/login" className="text-[#005cab] font-semibold">
// //               Sign in here
// //             </a>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from "react";

// export default function RegistrationForm() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     education: "",
//     skills: [],
//     interests: [],
//     location: "",
//   });
//   const [skillInput, setSkillInput] = useState("");
//   const [interestInput, setInterestInput] = useState("");
//   const [passwordStrength, setPasswordStrength] = useState("");
//   const [passwordMatch, setPasswordMatch] = useState("");

//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);

//   const checkStrength = (password) => {
//     const strongRegex =
//       /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     const mediumRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

//     if (strongRegex.test(password)) {
//       setPasswordStrength("strong");
//     } else if (mediumRegex.test(password)) {
//       setPasswordStrength("medium");
//     } else {
//       setPasswordStrength("weak");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === "password") checkStrength(value);

//     if (name === "confirmPassword" || name === "password") {
//       if (formData.confirmPassword && value !== formData.password) {
//         setPasswordMatch("mismatch");
//       } else if (formData.confirmPassword && value === formData.password) {
//         setPasswordMatch("match");
//       }
//     }
//   };

//   const addSkill = (e) => {
//     e.preventDefault();
//     if (skillInput.trim()) {
//       setFormData({
//         ...formData,
//         skills: [...formData.skills, skillInput.trim()],
//       });
//       setSkillInput("");
//     }
//   };

//   const addInterest = (e) => {
//     e.preventDefault();
//     if (interestInput.trim()) {
//       setFormData({
//         ...formData,
//         interests: [...formData.interests, interestInput.trim()],
//       });
//       setInterestInput("");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f4f9ff] to-[#e8f1fa] px-4 sm:px-6 lg:px-8"
//       style={{ fontFamily: "Poppins, sans-serif" }}
//     >
//       <div className="w-full max-w-md sm:max-w-lg ">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#005cab]">
//             SmartIntern
//           </h1>
//           <p className="text-gray-600 mt-2 text-sm md:text-base ">
//             Register your profile to access opportunities
//           </p>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full">
//           {/* Card Header */}
//           <div className="bg-[#005cab] text-white p-6">
//             <h2 className="text-lg md:text-xl font-semibold">
//               Registration Form
//             </h2>
//             <p className="text-sm opacity-90">
//               {step === 1
//                 ? "Step 1 of 2: Basic Information"
//                 : "Step 2 of 2: Additional Details"}
//             </p>
//           </div>

//           {/* Form */}
//           <div className="p-6 md:p-8">
//             {/* Stepper */}
//             <div className="flex items-center justify-center mb-6">
//               <div
//                 className={`w-9 h-9 flex items-center justify-center rounded-full font-semibold ${
//                   step === 1
//                     ? "bg-[#005cab] text-white"
//                     : "bg-gray-300 text-gray-600"
//                 }`}
//               >
//                 1
//               </div>
//               <div className="w-14 h-[2px] bg-gray-400 mx-3"></div>
//               <div
//                 className={`w-9 h-9 flex items-center justify-center rounded-full font-semibold ${
//                   step === 2
//                     ? "bg-[#005cab] text-white"
//                     : "bg-gray-300 text-gray-600"
//                 }`}
//               >
//                 2
//               </div>
//             </div>

//             {/* Step 1 */}
//             {step === 1 ? (
//               <>
//                 {/* Full Name */}
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-[#005cab] outline-none"
//                   placeholder="Enter your full name"
//                 />

//                 {/* Email */}
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-[#005cab] outline-none"
//                   placeholder="Enter your email address"
//                 />

//                 {/* Password */}
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                   Password *
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:ring-2 focus:ring-[#005cab] outline-none"
//                   placeholder="Create a strong password"
//                 />
//                 {passwordStrength && (
//                   <p
//                     className={`text-sm mb-4 ${
//                       passwordStrength === "weak"
//                         ? "text-red-500"
//                         : passwordStrength === "medium"
//                         ? "text-yellow-600"
//                         : "text-green-600"
//                     }`}
//                   >
//                     {passwordStrength === "weak" &&
//                       "Weak ❌ (min 8 chars, 1 capital, 1 number, 1 special char)"}
//                     {passwordStrength === "medium" &&
//                       "Medium ⚠ (add a special character for strong password)"}
//                     {passwordStrength === "strong" && "Strong ✔"}
//                   </p>
//                 )}

//                 {/* Confirm Password */}
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                   Confirm Password *
//                 </label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:ring-2 focus:ring-[#005cab] outline-none"
//                   placeholder="Re-enter your password"
//                 />
//                 {passwordMatch && (
//                   <p
//                     className={`text-sm mb-4 ${
//                       passwordMatch === "mismatch"
//                         ? "text-red-500"
//                         : "text-green-600"
//                     }`}
//                   >
//                     {passwordMatch === "mismatch"
//                       ? "Passwords do not match ❌"
//                       : "Passwords match ✔"}
//                   </p>
//                 )}

//                 <button
//                   onClick={() => setStep(2)}
//                   className="w-full bg-[#005cab] text-white py-3 rounded-lg font-semibold hover:bg-[#004080] transition"
//                 >
//                   Continue to Additional Details
//                 </button>
//               </>
//             ) : (
//               /* Step 2 */
//               <>
//                 {/* Education */}
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                   Education
//                 </label>
//                 <select
//                   name="education"
//                   value={formData.education}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-[#005cab] outline-none"
//                 >
//                   <option value="">Select your education level</option>
//                   <option value="High School">High School</option>
//                   <option value="Undergraduate">Undergraduate</option>
//                   <option value="Graduate">Graduate</option>
//                   <option value="Postgraduate">Postgraduate</option>
//                 </select>

//                 {/* Skills */}
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                   Skills
//                 </label>
//                 <div className="flex mb-4">
//                   <input
//                     type="text"
//                     value={skillInput}
//                     onChange={(e) => setSkillInput(e.target.value)}
//                     className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#005cab] outline-none"
//                     placeholder="Add a skill (e.g., Python)"
//                   />
//                   <button
//                     onClick={addSkill}
//                     className="ml-2 bg-[#ff7500] text-white px-4 rounded-lg hover:bg-[#e06600] transition"
//                   >
//                     Add
//                   </button>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {formData.skills.map((skill, idx) => (
//                     <span
//                       key={idx}
//                       className="px-2 py-1 bg-[#005cab] text-white rounded-md text-sm"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Interests */}
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                   Interests
//                 </label>
//                 <div className="flex mb-4">
//                   <input
//                     type="text"
//                     value={interestInput}
//                     onChange={(e) => setInterestInput(e.target.value)}
//                     className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#005cab] outline-none"
//                     placeholder="Add an interest (e.g., AI)"
//                   />
//                   <button
//                     onClick={addInterest}
//                     className="ml-2 bg-[#ff7500] text-white px-4 rounded-lg hover:bg-[#e06600] transition"
//                   >
//                     Add
//                   </button>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {formData.interests.map((interest, idx) => (
//                     <span
//                       key={idx}
//                       className="px-2 py-1 bg-[#005cab] text-white rounded-md text-sm"
//                     >
//                       {interest}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Location */}
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:ring-2 focus:ring-[#005cab] outline-none"
//                   placeholder="Enter your city (e.g., Delhi)"
//                 />

//                 {/* Buttons */}
//                 <div className="flex justify-between">
//                   <button
//                     onClick={() => setStep(1)}
//                     className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     Back
//                   </button>
//                   <button className="px-6 py-2 bg-[#005cab] text-white rounded-lg font-semibold hover:bg-[#004080] transition">
//                     Complete Registration
//                   </button>
//                 </div>
//               </>
//             )}

//             {/* Footer */}
//             <p className="text-center text-sm text-gray-600 mt-6">
//               Already have an account?{" "}
//               <a href="/login" className="text-[#005cab] font-semibold">
//                 Sign in here
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { User, Mail, Lock, BookOpen, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-[#EFF6FF] px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Branding Panel */}
        <div className="hidden lg:flex items-center justify-center bg-[#1E3A8A] p-10 relative">
          <div className="text-center text-white space-y-4">
            <img
              src={logo}
              alt="SmartIntern Logo"
              className="mx-auto w-32 h-32 object-contain"
            />
            <h2 className="text-2xl font-bold">Join SmartIntern</h2>
            <p className="text-gray-200 text-sm max-w-sm mx-auto">
              Build your profile and explore opportunities tailored for you.
            </p>
          </div>
          <div className="absolute bottom-6 text-xs text-gray-300">
            © 2025 SmartIntern
          </div>
        </div>

        {/* Right - Registration Form */}
        <div className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#1E3A8A]">
                Registration
              </h1>
              <p className="text-gray-600 mt-2 text-sm">
                Step {step} of 2:{" "}
                {step === 1 ? "Basic Information" : "Additional Details"}
              </p>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-center mb-8">
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full font-semibold ${
                  step === 1
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                1
              </div>
              <div className="w-14 h-[2px] bg-gray-400 mx-3"></div>
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full font-semibold ${
                  step === 2
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                2
              </div>
            </div>

            {/* Step 1 */}
            {step === 1 ? (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      placeholder="Create a strong password"
                    />
                  </div>
                  {passwordStrength && (
                    <p
                      className={`text-sm mt-1 ${
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
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                    placeholder="Re-enter your password"
                  />
                  {passwordMatch && (
                    <p
                      className={`text-sm mt-1 ${
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
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-[#1E3A8A] text-white py-3 rounded-xl font-semibold hover:bg-[#163172] transition"
                >
                  Continue to Additional Details
                </button>
              </>
            ) : (
              /* Step 2 */
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Education
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                    >
                      <option value="">Select your education level</option>
                      <option value="High School">High School</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      className="flex-1 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      placeholder="Add a skill (e.g., Python)"
                    />
                    <button
                      onClick={addSkill}
                      className="ml-2 bg-[#F97316] text-white px-4 rounded-xl hover:bg-[#e66600] transition"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#1E3A8A] text-white rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interests
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={interestInput}
                      onChange={(e) => setInterestInput(e.target.value)}
                      className="flex-1 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      placeholder="Add an interest (e.g., AI)"
                    />
                    <button
                      onClick={addInterest}
                      className="ml-2 bg-[#F97316] text-white px-4 rounded-xl hover:bg-[#e66600] transition"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#1E3A8A] text-white rounded-md text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      placeholder="Enter your city (e.g., Delhi)"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-2 border border-gray-400 rounded-xl hover:bg-gray-100 transition"
                  >
                    Back
                  </button>
                  <button className="px-6 py-2 bg-[#1E3A8A] text-white rounded-xl font-semibold hover:bg-[#163172] transition">
                    Complete Registration
                  </button>
                </div>
              </>
            )}

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-[#F97316] font-semibold">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
