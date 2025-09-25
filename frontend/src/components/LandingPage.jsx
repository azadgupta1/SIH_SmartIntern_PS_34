import React from "react";
import Banner from "../assets/Banner.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import age from "../assets/age.svg";
import job from "../assets/job.svg";
import education from "../assets/education.svg";
import family from "../assets/family.svg";
import time from "../assets/time.svg";
import stipend from "../assets/stipend.svg";
import grant from "../assets/grant.svg";
import network from "../assets/selectors.svg";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      <div className="w-full">
        <img
          src={Banner}
          alt="PM Modi Poster"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="flex flex-wrap justify-center items-center gap-10 py-8 bg-gray-50 px-6">
        <img src={partner1} alt="NPCI" className="h-20" />
        <img src={partner2} alt="Adani" className="h-20" />
        <img src={partner3} alt="Aarti" className="h-20" />
        <img src={partner4} alt="APCPL" className="h-20" />
      </section>

      {/* Eligibility Section */}
      <section className="px-6 md:px-16 py-12 bg-white">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-8">
          Are you <span className="text-orange-500">Eligible?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Age */}
          <div className="p-6 shadow-md rounded-lg bg-gray-50 text-center">
            <img src={age} alt="Age" className="mx-auto w-16 h-16 mb-4" />
            <p className="text-xl font-semibold">Age</p>
            <p className="text-gray-600">21-24 Years</p>
          </div>
          {/* Job Status */}
          <div className="p-6 shadow-md rounded-lg bg-gray-50 text-center">
            <img src={job} alt="Job" className="mx-auto w-16 h-16 mb-4" />
            <p className="text-xl font-semibold">Job Status</p>
            <p className="text-gray-600">Not Employed Full Time</p>
          </div>
          {/* Education */}
          <div className="p-6 shadow-md rounded-lg bg-gray-50 text-center">
            <img
              src={education}
              alt="Education"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="text-xl font-semibold">Education</p>
            <p className="text-gray-600">Not Enrolled Full Time</p>
          </div>
          {/* Family */}
          <div className="p-6 shadow-md rounded-lg bg-gray-50 text-center lg:col-span-1 md:col-span-2">
            <img src={family} alt="Family" className="mx-auto w-16 h-16 mb-4" />
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
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Core Benefits for{" "}
          <span className="text-orange-500 font-bold ">
            PM Internship Scheme
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Experience */}
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <img
              src={time}
              alt="Experience"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="font-semibold">12 months real-life experience</p>
            <p className="text-gray-600">in India’s top companies</p>
          </div>
          {/* Stipend */}
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <img
              src={stipend}
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
            <img src={grant} alt="Skills" className="mx-auto w-16 h-16 mb-4" />
            <p className="font-semibold">Skill Development</p>
            <p className="text-gray-600">Boost employability & confidence</p>
          </div>
          {/* Networking */}
          <div className="p-6 shadow-md rounded-lg bg-white text-center">
            <img
              src={network}
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
