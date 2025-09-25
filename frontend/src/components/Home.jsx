import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: !isMobile,
    centerMode: true,
    centerPadding: isMobile ? "20px" : "0px",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024, // Tablets landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768, // Tablets portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
          arrows: false,
        },
      },
      {
        breakpoint: 640, // Mobile landscape
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
          Recommended Internships
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto">
          Discover the latest internship opportunities from top companies
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {internships.map((data) => (
            <div
              key={data.id}
              className="px-1 sm:px-2 md:px-3 focus:outline-none"
            >
              <InternshipCard internship={data} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile Indicators */}
      {isMobile && (
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">Swipe to navigate</p>
        </div>
      )}
    </div>
  );
}

// Enhanced InternshipCard Component
const InternshipCard = ({ internship }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 mx-auto w-full h-full flex flex-col transform hover:-translate-y-1">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 sm:p-4 text-white">
        <h3 className="text-base sm:text-lg font-bold truncate">
          {internship.title}
        </h3>
        <p className="text-blue-100 text-xs sm:text-sm truncate mt-1">
          {internship.companyName}
        </p>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
            {internship.category}
          </span>
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
            {internship.location}
          </span>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
          {internship.description}
        </p>

        {/* Skills */}
        <div className="mb-4">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
            Skills Required:
          </h4>
          <div className="flex flex-wrap gap-1">
            {internship.skillsNeeded.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
            <span>Posted by: {internship.postedBy.split("@")[0]}</span>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm active:scale-95 transform transition-transform">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Sample internship data
const internships = [
  {
    id: 1,
    title: "Product Management Intern",
    description:
      "Assist in market research, competitor analysis, and product roadmap planning. Work with cross-functional teams to deliver product improvements.",
    skillsNeeded: ["Communication", "Market Research", "Data Analysis"],
    category: "IT",
    location: "Bangalore, India",
    companyName: "TechNova Solutions",
    postedBy: "hr@technova.com",
  },
  {
    id: 2,
    title: "Data Science Intern",
    description:
      "Support the analytics team in building predictive models and analyzing large datasets to extract insights.",
    skillsNeeded: ["Python", "Machine Learning", "Data Visualization"],
    category: "IT",
    location: "Pune, India",
    companyName: "Insight Analytics",
    postedBy: "careers@insightanalytics.com",
  },
  {
    id: 3,
    title: "Healthcare Management Intern",
    description:
      "Work with the hospital administration team to optimize patient scheduling and healthcare workflows.",
    skillsNeeded: ["Excel", "Process Optimization", "Communication"],
    category: "Healthcare",
    location: "Mumbai, India",
    companyName: "MediCare Hospitals",
    postedBy: "admin@medicare.com",
  },
  {
    id: 4,
    title: "Marketing & PM Intern",
    description:
      "Collaborate with product managers to create go-to-market strategies and monitor product performance.",
    skillsNeeded: ["Marketing", "Presentation", "Product Strategy"],
    category: "Business",
    location: "Delhi, India",
    companyName: "BrightPath Startups",
    postedBy: "jobs@brightpath.in",
  },
  {
    id: 5,
    title: "Software Engineering Intern",
    description:
      "Develop new features for the company's SaaS product under the guidance of senior developers.",
    skillsNeeded: ["JavaScript", "React", "Node.js"],
    category: "IT",
    location: "Remote",
    companyName: "CloudEdge Systems",
    postedBy: "careers@cloudedge.com",
  },
  {
    id: 6,
    title: "UX Design Intern",
    description:
      "Create user-centered designs and collaborate with the product team to enhance user experience.",
    skillsNeeded: ["Figma", "User Research", "Wireframing"],
    category: "Design",
    location: "Hyderabad, India",
    companyName: "DesignHub Studios",
    postedBy: "design@designhub.com",
  },
];
