import React from "react";
import Home from "../components/Home.jsx";
import AllInternships from "../components/AllInternships.jsx";
import Navbar from "../components/Navbar.jsx";

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Home />
      <AllInternships />
    </div>
  );
};

export default DashboardPage;
