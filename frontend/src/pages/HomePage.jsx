import React from "react";
import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";
<<<<<<< Updated upstream
import DashboardPage from "./DashboardPage.jsx";
=======
import LandingPage from "../components/LandingPage.jsx";
>>>>>>> Stashed changes

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
<<<<<<< Updated upstream
      <DashboardPage />
=======
      <LandingPage />
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
};

export default HomePage;
