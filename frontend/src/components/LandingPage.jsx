import React from "react";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      <section className="bg-blue-700 text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Stay Protected</h1>
          <p className="text-lg">
            You're almost there! Complete your Government-Sponsored Insurance
            process and enter this new phase well protected.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Complete Process
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Narendra_Modi_2021.jpg/440px-Narendra_Modi_2021.jpg"
            alt="PM"
            className="w-64 md:w-80 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Partner Logos */}
      <section className="flex flex-wrap justify-center items-center gap-10 py-8 bg-gray-50 px-6">
        <img
          src="https://dummyimage.com/120x60/ccc/000&text=NPCI"
          alt="NPCI"
          className="h-12"
        />
        <img
          src="https://dummyimage.com/120x60/ccc/000&text=Adani"
          alt="Adani"
          className="h-12"
        />
        <img
          src="https://dummyimage.com/120x60/ccc/000&text=Aarti"
          alt="Aarti"
          className="h-12"
        />
        <img
          src="https://dummyimage.com/120x60/ccc/000&text=APCPL"
          alt="APCPL"
          className="h-12"
        />
      </section>

      {/* Eligibility Section */}
      <section className="px-6 md:px-16 py-12 bg-white">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Are you <span className="text-orange-500">Eligible?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Age */}
          <div className="p-6 shadow-md rounded-lg bg-gray-50 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Age"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="text-xl font-semibold">Age</p>
            <p className="text-gray-600">21-24 Years</p>
          </div>
          {/* Job Status */}
          <div className="p-6 shadow-md rounded-lg bg-gray-50 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="Job"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="text-xl font-semibold">Job Status</p>
            <p className="text-gray-600">Not Employed Full Time</p>
          </div>
          {/* Education */}
          <div className="p-6 shadow-md rounded-lg bg-gray-50 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
              alt="Education"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="text-xl font-semibold">Education</p>
            <p className="text-gray-600">Not Enrolled Full Time</p>
          </div>
          {/* Family */}
          <div className="p-6 shadow-md rounded-lg bg-gray-50 text-center lg:col-span-1 md:col-span-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
              alt="Family"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="text-xl font-semibold">
              Family (Self / Spouse / Parents)
            </p>
            <ul className="text-gray-600 list-disc text-left ml-6 mt-2">
              <li>No one is earning more than ₹8 Lakhs PA</li>
              <li>No member has a Govt. Job</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="px-6 md:px-16 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Core Benefits for{" "}
          <span className="text-orange-500">PM Internship Scheme</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Experience */}
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920320.png"
              alt="Experience"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="font-semibold">12 months real-life experience</p>
            <p className="text-gray-600">in India’s top companies</p>
          </div>
          {/* Stipend */}
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="Stipend"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="font-semibold">Monthly Assistance</p>
            <p className="text-gray-600">
              ₹4500 by Govt of India + ₹500 by Industry
            </p>
          </div>
          {/* Skill Development */}
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Skills"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="font-semibold">Skill Development</p>
            <p className="text-gray-600">Boost employability & confidence</p>
          </div>
          {/* Networking */}
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
              alt="Networking"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="font-semibold">Networking Opportunities</p>
            <p className="text-gray-600">Connect with industry leaders</p>
          </div>
        </div>
      </section>
    </div>
  );
}
