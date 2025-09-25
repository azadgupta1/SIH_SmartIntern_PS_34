import React from "react";
import { User, Briefcase, MessageSquare, Share2 } from "lucide-react"; // icons from lucide
import AllInternships from "../components/AllInternships.jsx";
import Home from "../components/Home.jsx";
import Navbar from "../components/Navbar_1.jsx";

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-blue-800 text-white flex flex-col p-6">
          <nav className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded"
            >
              <User size={20} /> Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded"
            >
              <User size={20} /> Candidate Profile
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-white text-blue-800 p-2 rounded-xl"
            >
              <Briefcase size={20} /> View & Apply Internships
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded"
            >
              <MessageSquare size={20} /> Grievance
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded"
            >
              <Share2 size={20} /> Refer a Friend
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6 overflow-auto">
          <Home />
          <AllInternships />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
