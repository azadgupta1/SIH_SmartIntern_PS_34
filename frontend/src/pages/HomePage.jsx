import React from "react";
import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";
import AllInternships from "../components/AllInternships.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Home />
      <AllInternships />
      <Footer />
    </div>
  );
};

export default HomePage;
