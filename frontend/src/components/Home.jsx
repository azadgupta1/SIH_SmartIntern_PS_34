import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 700,
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-6">
      {" "}
      {/* Changed to full width with padding */}
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Container to center content */}
        <Slider {...settings}>
          {internships.map((data) => (
            <div key={data.id} className="px-2 focus:outline-none m-2">
              {" "}
              {/* Added focus outline */}
              <InternshipCard internship={data} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

// InternshipCard Component
const InternshipCard = ({ internship }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 mx-auto w-full h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
        <h3 className="text-lg font-bold truncate">{internship.title}</h3>
        <p className="text-blue-100 text-sm truncate">
          {internship.companyName}
        </p>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
            {internship.category}
          </span>
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium ml-2">
            {internship.location}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {internship.description}
        </p>

        {/* Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
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

        {/* Apply Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm mt-auto">
          Apply Now
        </button>
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
];
