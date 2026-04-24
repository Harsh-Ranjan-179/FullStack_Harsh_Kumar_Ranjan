import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");

  const latestJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Bangalore (Remote)",
      type: "Full-Time",
      salary: "₹6L - ₹10L",
      icon: "laptop-outline",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "Mumbai",
      type: "Part-Time",
      salary: "₹4L - ₹7L",
      icon: "color-palette-outline",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "DataSync",
      location: "Hyderabad",
      type: "Full-Time",
      salary: "₹8L - ₹14L",
      icon: "server-outline",
    },
    {
      id: 4,
      title: "React Intern",
      company: "StartupInc",
      location: "Pune (Hybrid)",
      type: "Internship",
      salary: "₹15K/mo",
      icon: "code-slash-outline",
    },
  ];

  const howItWorksSteps = [
    {
      id: 1,
      title: "Create Account",
      desc: "Sign up and complete your profile to let companies find you.",
      icon: "person-add-outline",
    },
    {
      id: 2,
      title: "Search Jobs",
      desc: "Filter and find thousands of job postings that match your skills.",
      icon: "search-outline",
    },
    {
      id: 3,
      title: "Apply Easily",
      desc: "Apply to your dream jobs directly with just a single click.",
      icon: "paper-plane-outline",
    },
  ];


  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Find your dream job now
        </h2>
        <p className="text-gray-600 mb-6">5 lakh+ jobs for you to explore</p>
        <div className="flex items-center bg-white shadow-md rounded-md overflow-hidden">
          <span className="px-3 text-gray-500">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <input
            type="text"
            placeholder="Search Jobs"
            className="flex-1 px-2 py-3 outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Analytics",
            "Startup",
            "Engineering",
            "Marketing",
            "Internship",
            "Sales",
          ].map((cat) => (
            <div
              key={cat}
              className="bg-white p-4 rounded-md shadow-sm flex items-center justify-between hover:shadow-md cursor-pointer transition"
            >
              <p className="font-medium">{cat}</p>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Latest Job Postings
          </h2>
          <button className="text-blue-600 hover:underline font-medium">
            View All
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col h-full"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg text-xl flex items-center justify-center">
                  <ion-icon name={job.icon}></ion-icon>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 leading-tight">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
              </div>

              <div className="flex-grow mb-4 text-sm text-gray-600 space-y-2">
                <p className="flex items-center">
                  <ion-icon name="location-outline" className="mr-2"></ion-icon>{" "}
                  {job.location}
                </p>
                <p className="flex items-center">
                  <ion-icon name="cash-outline" className="mr-2"></ion-icon>{" "}
                  {job.salary}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                  {job.type}
                </span>
                <button
                  onClick={() => {
                    setSelectedJobTitle(job.title);
                    setIsModalOpen(true);
                  }}
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
          How Karya Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {howItWorksSteps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-4">
                <ion-icon name={step.icon}></ion-icon>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-16 bg-blue-600 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 text-white">
        <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-3">Ready to get discovered?</h2>
          <p className="text-blue-100 text-lg">
            Upload your resume and let top HRs reach out to you directly.
          </p>
        </div>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition shadow-md whitespace-nowrap">
          Create Profile
        </button>
      </div>


      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Top companies hiring now
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "MNCs", desc: "2.3K+ are actively hiring" },
            { title: "Manufacturing", desc: "1.2K+ are actively hiring" },
            { title: "Product", desc: "1.3K+ are actively hiring" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-lg font-semibold mb-2">{item.title}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Featured Companies actively Hiring
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Infosys",
              rating: "3.5 rating • 48.5K+ reviews",
              desc: "Global leader in next-gen digital services & consulting.",
            },
            {
              name: "Capgemini",
              rating: "3.6 rating • 52.5K+ reviews",
              desc: "Global leader in Technology services.",
            },
            {
              name: "FIS",
              rating: "3.8 rating • 6.5K+ reviews",
              desc: "Global leader in financial services Technology.",
            },
          ].map((company) => (
            <div
              key={company.name}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
              <p className="text-yellow-500 mb-1">{company.rating}</p>
              <p className="text-gray-600 mb-4">{company.desc}</p>
              <Link
                to="/jobs"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                View Jobs
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden relative border border-gray-100">
            <div className="bg-blue-50/50 px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800">
                Apply for Role
              </h3>
              <p className="text-blue-600 font-medium text-sm mt-1">
                {selectedJobTitle}
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl transition-colors outline-none"
            >
              &times;
            </button>

            <div className="p-6">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Application Submitted Successfully!");
                  setIsModalOpen(false);
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume (PDF, DOCX)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full text-sm text-gray-500 
                      file:mr-4 file:py-2 file:px-4 
                      file:rounded-md file:border-0 
                      file:text-sm file:font-semibold 
                      file:bg-blue-50 file:text-blue-700 
                      hover:file:bg-blue-100 cursor-pointer 
                      border border-gray-300 rounded-md outline-none transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-md hover:bg-blue-700 transition shadow-sm"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
