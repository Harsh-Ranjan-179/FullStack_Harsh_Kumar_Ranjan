import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobBoard = () => {
  // 1. State for jobs and search term
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 2. Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        // If there's a search term, call the search API. Otherwise, get all jobs.
        const url = searchTerm 
          ? `http://localhost:5000/api/jobs/search?q=${searchTerm}`
          : `http://localhost:5000/api/jobs`;
          
        const response = await axios.get(url);
        setJobs(response.data);
        setError("");
      } catch (err) {
        setError("Failed to load jobs. Make sure the backend server is running.");
      } finally {
        setLoading(false);
      }
    };

    // Simple debounce to avoid calling API on every single keystroke
    const delayDebounceFn = setTimeout(() => {
      fetchJobs();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Handle Apply to Job
  const handleApply = async (jobId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to apply for jobs!");
      return;
    }

    try {
      // We will create this backend endpoint next!
      const response = await axios.post(
        "http://localhost:5000/api/applications", 
        { job_id: jobId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Successfully applied for the job!");
    } catch (err) {
      alert(err.response?.data?.message || "Error applying for job");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Job Board</h2>
      
      {/* Search Input UI */}
      <input 
        type="text" 
        placeholder="Search by title or location..." 
        className="w-full p-3 border rounded-md mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Show Error or Loading State */}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading && <p className="text-gray-500 mb-4">Loading jobs...</p>}

      {/* Render Jobs from Backend */}
      <div className="space-y-4">
        {!loading && jobs.length > 0 ? (
          jobs.map(job => (
            <div key={job.id} className="p-4 border rounded-md shadow-sm flex justify-between items-center bg-white">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company} • {job.location}</p>
                {job.salary && <p className="text-sm text-green-600 font-medium mt-1">₹{job.salary}</p>}
              </div>
              <button 
                onClick={() => handleApply(job.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Apply Now
              </button>
            </div>
          ))
        ) : (
          !loading && <p className="text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobBoard;