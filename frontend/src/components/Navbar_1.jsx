// import React, { useState } from "react";
// import { Menu, X, ZoomIn, ZoomOut, Volume, VolumeOff } from "lucide-react";
// import { Link } from "react-router-dom";
// import flag from "../assets/indian_flag.svg";
// import logo from "../assets/logo.png";
// import vikshit from "../assets/vikshit_img.svg";
// import ministry from "../assets/MCA.svg";
// import pm from "../assets/pm_internship_logo_eng.svg";

// const Navbar = () => {
//     const [isMuted, setIsMuted] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMute = () => setIsMuted(!isMuted);
//     const toggleMenu = () => setMenuOpen(!menuOpen);

//     return (
//         <nav className="w-full flex flex-col shadow-md border-gray-800 border-b-1">

//             {/* Bottom White Bar */}
//             <div className="w-full bg-white h-16 flex flex-wrap items-center justify-between px-6 shadow-sm">
//                 {/* Logo */}
//                 <div className="flex items-center space-x-2">
//                     <img
//                         src={ministry}
//                         alt="Logo"
//                         className="h-8 sm:h-10 object-contain"
//                     />
//                     <img src={pm} alt="Logo" className="h-8 sm:h-10 object-contain" />
//                     <img src={logo} alt="Logo" className="h-8 sm:h-10 object-contain" />
//                     <span className="font-bold text-lg text-black hidden sm:block">
//                         SmartIntern
//                     </span>
//                 </div>


//             </div>


//         </nav>
//     );
// };

// export default Navbar;





import React, { useState } from "react";
import { Menu, X, ZoomIn, ZoomOut, Volume, VolumeOff, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import flag from "../assets/indian_flag.svg";
import logo from "../assets/logo.png";
import vikshit from "../assets/vikshit_img.svg";
import ministry from "../assets/MCA.svg";
import pm from "../assets/pm_internship_logo_eng.svg";

const Navbar = () => {
    const [isMuted, setIsMuted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMute = () => setIsMuted(!isMuted);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLogout = () => {
        localStorage.removeItem("token"); // remove token
        navigate("/"); // redirect to homepage
    };

    return (
        <nav className="w-full flex flex-col shadow-md border-gray-800 border-b-1">
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

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
