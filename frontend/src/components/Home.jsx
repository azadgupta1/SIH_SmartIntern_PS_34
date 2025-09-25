import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  const parseSkills = (skillsString) => {
    if (!skillsString) return [];
    if (Array.isArray(skillsString)) return skillsString;
    try {
      return JSON.parse(skillsString.replace(/'/g, '"'));
    } catch {
      return [skillsString]; // fallback: show as plain text
    }
  };


  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fetch recommendations
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:3000/api/recommend", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        console.log("RAW API RESPONSE:", data);

        let recs = [];

        if (Array.isArray(data)) {
          recs = data; // ✅ backend returned plain array
        } else if (data.recommendations) {
          recs = data.recommendations; // ✅ backend returned wrapped object
        }

        if (recs.length > 0) {
          const parsed = recs.map((r) => ({
            ...r,
            skillsNeeded: parseSkills(r.skillsNeeded),
            description:
              r.description ||
              "No description available. Please check details before applying.",
            postedBy: r.companyName || "Unknown",
          }));
          console.log("PARSED RECOMMENDATIONS:", parsed);
          setInternships(parsed);
        }
      } catch (err) {
        console.error("Error fetching recommendations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
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
      { breakpoint: 1280, settings: { slidesToShow: 3, centerMode: false } },
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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

      {/* Carousel */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="w-10 h-10 border-4 border-blue-800 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-center text-gray-500 mt-4">
              Loading recommendations...
            </p>
          </div>
        ) : internships.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            No recommendations found.
          </p>
        ) : (
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
        )}

      </div>

      {/* Mobile Hint */}
      {isMobile && (
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">Swipe to navigate</p>
        </div>
      )}
    </div>
  );
}


// Internship Card (Professional Look)
const InternshipCard = ({ internship }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 mx-auto w-full h-full flex flex-col">
      {/* Header */}
      <div className="bg-blue-800 text-white px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm sm:text-base font-semibold text-white truncate">
          {internship.title}
        </h3>
        <p className="text-gray-200 text-xs truncate mt-0.5">
          {internship.companyName}
        </p>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded border border-blue-100">
            {internship.category}
          </span>
          <span className="inline-block bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded border border-green-100">
            {internship.location}
          </span>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed">
          {internship.description}
        </p>

        {/* Skills */}
        {internship.skillsNeeded?.length > 0 && (
          <div className="mb-3">
            <h4 className="text-xs font-medium text-gray-700 mb-1">
              Skills:
            </h4>
            <div className="flex flex-wrap gap-1">
              {internship.skillsNeeded.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-50 border border-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] text-gray-500">
            Posted by {internship.postedBy || "N/A"}
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-medium transition">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
