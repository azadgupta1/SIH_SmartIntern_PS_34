import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import LandingPage from "../components/LandingPage.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default HomePage;
