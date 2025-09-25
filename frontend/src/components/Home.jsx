import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import InternshipCard from "./IntershipCard.jsx";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const visibleSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % internships.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? internships.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full flex justify-center items-center p-4">
      {/* Slides Container */}
      <div className="w-full overflow-hidden border-1 border-gray-500 rounded-lg py-10">
        <div
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{
            transform: `translateX(-${current * (100 / visibleSlides)}%)`,
            width: `${(internships.length / visibleSlides) * 100}%`,
          }}
        >
          {internships.map((data, index) => (
            <div
              key={index}
              className={`px-2 transition-transform duration-700 ease-in-out`}
              style={{
                flex: `0 0 ${100 / visibleSlides}%`,
                transform: index === current + 1 ? "scale(1.1)" : "scale(0.9)",
                zIndex: index === current + 1 ? 20 : 10,
              }}
            >
              <InternshipCard internship={data} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <FaArrowAltCircleLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <FaArrowAltCircleRight size={20} />
      </button>
    </div>
  );
}

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
      "Develop new features for the company’s SaaS product under the guidance of senior developers.",
    skillsNeeded: ["JavaScript", "React", "Node.js"],
    category: "IT",
    location: "Remote",
    companyName: "CloudEdge Systems",
    postedBy: "careers@cloudedge.com",
  },
];

// import React, { useEffect, useState } from "react";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import InternshipCard from "./IntershipCard";

// const images = [
//   "https://picsum.photos/id/1015/600/400",
//   "https://picsum.photos/id/1016/600/400",
//   "https://picsum.photos/id/1018/600/400",
//   "https://picsum.photos/id/1020/600/400",
//   "https://picsum.photos/id/1024/600/400",
//   "https://picsum.photos/id/1027/600/400",
// ];

// export default function Home() {
//   const [current, setCurrent] = useState(0);
//   const visibleSlides = 3;

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [current]);

//   const nextSlide = () => {
//     setCurrent((prev) =>
//       prev + visibleSlides >= images.length ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? images.length - visibleSlides : prev - 1
//     );
//   };

//   return (
//     <div className="relative w-full mx-auto mt-6 overflow-hidden">
//       <h2 className="mt-5 mb-2 text-3xl font-bold">Recommendations</h2>
//       {/* Slides */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out p-4"
//         style={{
//           transform: `translateX(-${current * (100 / visibleSlides)}%)`,
//           width: `${(interships.length / visibleSlides) * 100}%`,
//         }}
//       >
//         {internships.map((data, index) => (
//           <div key={index} className="w-1/5 flex-shrink-0 px-2">
//             <InternshipCard internship={data} />
//           </div>
//         ))}
//       </div>

//       {/* Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
//       >
//         <FaArrowAltCircleLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
//       >
//         <FaArrowAltCircleRight />
//       </button>
//     </div>
//   );
// }

// const internships = [
//   {
//     id: 1,
//     title: "Product Management Intern",
//     description:
//       "Assist in market research, competitor analysis, and product roadmap planning. Work with cross-functional teams to deliver product improvements.",
//     skillsNeeded: ["Communication", "Market Research", "Data Analysis"],
//     category: "IT",
//     location: "Bangalore, India",
//     companyName: "TechNova Solutions",
//     postedBy: "hr@technova.com",
//   },
//   {
//     id: 2,
//     title: "Data Science Intern",
//     description:
//       "Support the analytics team in building predictive models and analyzing large datasets to extract insights.",
//     skillsNeeded: ["Python", "Machine Learning", "Data Visualization"],
//     category: "IT",
//     location: "Pune, India",
//     companyName: "Insight Analytics",
//     postedBy: "careers@insightanalytics.com",
//   },
//   {
//     id: 3,
//     title: "Healthcare Management Intern",
//     description:
//       "Work with the hospital administration team to optimize patient scheduling and healthcare workflows.",
//     skillsNeeded: ["Excel", "Process Optimization", "Communication"],
//     category: "Healthcare",
//     location: "Mumbai, India",
//     companyName: "MediCare Hospitals",
//     postedBy: "admin@medicare.com",
//   },
//   {
//     id: 4,
//     title: "Marketing & PM Intern",
//     description:
//       "Collaborate with product managers to create go-to-market strategies and monitor product performance.",
//     skillsNeeded: ["Marketing", "Presentation", "Product Strategy"],
//     category: "Business",
//     location: "Delhi, India",
//     companyName: "BrightPath Startups",
//     postedBy: "jobs@brightpath.in",
//   },
//   {
//     id: 5,
//     title: "Software Engineering Intern",
//     description:
//       "Develop new features for the company’s SaaS product under the guidance of senior developers.",
//     skillsNeeded: ["JavaScript", "React", "Node.js"],
//     category: "IT",
//     location: "Remote",
//     companyName: "CloudEdge Systems",
//     postedBy: "careers@cloudedge.com",
//   },
// ];
