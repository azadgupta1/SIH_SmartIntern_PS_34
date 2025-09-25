import React from "react";

export default function InternshipCard({ internship }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-blue-600">
        {internship.title}
      </h2>
      <p className="text-gray-500 text-sm">{internship.companyName}</p>

      {/* Description */}
      <p className="text-gray-700 mt-3 text-sm line-clamp-3 flex-grow">
        {internship.description}
      </p>

      {/* Skills */}
      <div className="mt-3 flex flex-wrap gap-2">
        {internship.skillsNeeded.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs sm:text-sm bg-blue-100 text-blue-600 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-xs sm:text-sm text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-lg">
          {internship.category}
        </span>
        <span className="italic">{internship.location}</span>
      </div>

      {/* Apply Button */}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
  );
}

// import React from "react";

// export default function InternshipCard({ internship }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 mx-10">
//       {/* Title */}
//       <h2 className="text-xl font-semibold text-blue-600">
//         {internship.title}
//       </h2>
//       <p className="text-gray-500 text-sm">{internship.companyName}</p>

//       {/* Description */}
//       <p className="text-gray-700 mt-3 line-clamp-3">
//         {internship.description}
//       </p>

//       {/* Skills */}
//       <div className="mt-3 flex flex-wrap gap-2">
//         {internship.skillsNeeded.map((skill, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
//           >
//             {skill}
//           </span>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
//         <span className="bg-gray-100 px-3 py-1 rounded-lg">
//           {internship.category}
//         </span>
//         <span className="italic">{internship.location}</span>
//       </div>

//       {/* Apply Button */}
//       <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//         Apply Now
//       </button>
//     </div>
//   );
// }
