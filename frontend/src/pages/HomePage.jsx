import React from "react";
import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";
import DashboardPage from "./DashboardPage.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <DashboardPage />
      <Footer />
    </div>
  );
};

export default HomePage;
