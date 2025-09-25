import React, { useState } from "react";
import { Menu, X, ZoomIn, ZoomOut, Volume, VolumeOff } from "lucide-react";
import { Link } from "react-router-dom";
import flag from "../assets/indian_flag.svg";
import logo from "../assets/logo.png";
import vikshit from "../assets/vikshit_img.svg";
import ministry from "../assets/MCA.svg";
import pm from "../assets/pm_internship_logo_eng.svg";

const indianLanguages = [
  "English",
  "Hindi",
  "Bengali",
  "Marathi",
  "Telugu",
  "Tamil",
  "Gujarati",
  "Urdu",
  "Kannada",
  "Odia",
  "Malayalam",
];

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full flex flex-col shadow-md">
      {/* Top Black Bar */}
      <div className="w-full bg-black text-white flex flex-wrap items-center justify-between py-1 px-2">
        <div className="flex items-center">
          <img src={flag} alt="IndianFlag" className="h-6" />
          <p className="ml-1 text-sm sm:text-base">Government Of India</p>
        </div>
        <div className="flex items-center">
          <select className="bg-black border border-gray-400 rounded px-2 py-1 text-white h-8 sm:h-10 mx-1 text-sm sm:text-base">
            {indianLanguages.map((val, idx) => (
              <option value={val} key={idx}>
                {val}
              </option>
            ))}
          </select>
          <button className="hover:text-gray-300 mx-1">
            <ZoomIn size={20} />
          </button>
          <button className="hover:text-gray-300 mx-1">
            <ZoomOut size={20} />
          </button>
          <button onClick={toggleMute} className="hover:text-gray-300 mx-1">
            {isMuted ? <Volume size={20} /> : <VolumeOff size={20} />}
          </button>
          <img src={vikshit} alt="vb" className="h-10 sm:h-12 mx-1" />
        </div>
      </div>

      {/* Bottom White Bar */}
      <div className="w-full bg-white h-16 flex flex-wrap items-center justify-between px-6 shadow-sm">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={ministry}
            alt="Logo"
            className="h-8 sm:h-10 object-contain"
          />
          <img src={pm} alt="Logo" className="h-8 sm:h-10 object-contain" />
          <img src={logo} alt="Logo" className="h-8 sm:h-10 object-contain" />
          <span className="font-bold text-lg text-black hidden sm:block">
            SmartIntern
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-black hover:text-gray-600 font-medium">
            Home
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white flex flex-col items-center space-y-4 py-4 shadow-md">
          <Link
            to="/"
            className="text-black hover:text-gray-600 font-medium"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
            onClick={toggleMenu}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Menu, X, ZoomIn, ZoomOut, Volume, VolumeOff } from "lucide-react";
// import { Link } from "react-router-dom";
// import flag from "../assets/indian_flag.svg";
// import logo from "../assets/logo.png";
// import vikshit from "../assets/vikshit_img.svg";
// import ministry from "../assets/MCA.svg";
// import pm from "../assets/pm_internship_logo_eng.svg";

// const Navbar = () => {
//   const [isMuted, setIsMuted] = useState(false);

//   const toggleMute = () => setIsMuted(!isMuted);

//   return (
//     <nav className="w-full flex flex-col shadow-md align-middle text-center">
//       {/* Top Black Bar */}
//       <div className="w-full bg-black text-white flex flex-wrap items-center justify-between py-1 px-2">
//         <div className="flex justify-center items-center">
//           <img src={flag} alt="IndianFlag" />
//           <p className="ml-1">Government Of India</p>
//         </div>
//         <div className="flex justify-center items-center">
//           <select className="bg-black border border-gray-400 rounded px-2 py-1 text-white h-10 mx-1">
//             <option value="en">English</option>
//             <option value="hi">Hindi</option>
//             <option value="es">Spanish</option>
//           </select>
//           <button className="hover:text-gray-300 mx-1">
//             <ZoomIn size={20} />
//           </button>
//           <button className="hover:text-gray-300 mx-1">
//             <ZoomOut size={20} />
//           </button>
//           <button onClick={toggleMute} className="hover:text-gray-300 mx-1">
//             {!isMuted ? <VolumeOff size={20} /> : <Volume size={20} />}
//           </button>
//           <img src={vikshit} alt="vb" className="h-12 mx-1" />
//         </div>
//       </div>

//       {/* Bottom White Bar */}
//       <div className="w-full bg-white h-16 flex items-center justify-between px-6 shadow-sm">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src={ministry} alt="Logo" className="h-10 object-contain" />
//           <img src={pm} alt="Logo" className="h-10 object-contain" />
//           <img src={logo} alt="Logo" className="h-10 object-contain" />
//           <span className="font-bold text-lg text-black">SmartIntern</span>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-6">
//           <Link to="/" className="text-black hover:text-gray-600 font-medium">
//             Home
//           </Link>
//           <Link
//             to="/login"
//             className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
//           >
//             Signup
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-full bg-white shadow-md">
//       <nav className="w-full container flex items-center justify-between p-4">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-[#0F284A]">
//           PM Internship
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <li>
//             <Link to="/" className="hover:text-blue-600">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/internships" className="hover:text-blue-600">
//               Internships
//             </Link>
//           </li>
//           <li>
//             <Link to="/companies" className="hover:text-blue-600">
//               Companies
//             </Link>
//           </li>
//           <li>
//             <Link to="/resources" className="hover:text-blue-600">
//               Resources
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-blue-600">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-blue-600">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Auth Buttons (Desktop) */}
//         <div className="hidden md:flex space-x-4 ">
//           <a
//             href="/login"
//             className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
//           >
//             Login
//           </a>
//           <a
//             href="/register"
//             className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
//           >
//             Sign Up
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <ul className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
//             <li>
//               <a href="/" className="hover:text-[#0F284A]">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/internships" className="hover:text-[#0F284A]">
//                 Internships
//               </a>
//             </li>
//             <li>
//               <a href="/companies" className="hover:text-[#0F284A]">
//                 Companies
//               </a>
//             </li>
//             <li>
//               <a href="/resources" className="hover:text-[#0F284A]">
//                 Resources
//               </a>
//             </li>
//             <li>
//               <a href="/about" className="hover:text-[#0F284A]">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="hover:text-[#0F284A]">
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/login"
//                 className="block px-4 py-2 text-[#0F284A] border border-blue-600 rounded-lg hover:bg-blue-50"
//               >
//                 Login
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/signup"
//                 className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Sign Up
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }
