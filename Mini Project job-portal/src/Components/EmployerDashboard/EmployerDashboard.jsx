import React, { useState } from 'react';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", location: "Bangalore" }
  ]);

  // State to hold the new job form data
  const [newJobTitle, setNewJobTitle] = useState("");

  // Function to Post a Job
  const handlePostJob = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(), // Generate a fake unique ID
      title: newJobTitle,
      location: "Remote" // Hardcoded for simplicity here
    };
    // Add the new job to the existing array
    setJobs([...jobs, newJob]); 
    setNewJobTitle(""); // Clear the input
  };

  // Function to Delete a Job
  const handleDelete = (idToRemove) => {
    // Keep all jobs EXCEPT the one with the matching ID
    setJobs(jobs.filter(job => job.id !== idToRemove));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Employer Dashboard</h2>

      {/* Post Job UI */}
      <form onSubmit={handlePostJob} className="mb-8 p-4 bg-gray-50 border rounded-md">
        <h3 className="font-semibold mb-2">Post a New Job</h3>
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Job Title" 
            className="flex-1 p-2 border rounded"
            value={newJobTitle}
            onChange={(e) => setNewJobTitle(e.target.value)}
            required
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Post
          </button>
        </div>
      </form>

      {/* Edit/Delete UI */}
      <h3 className="font-semibold mb-4">Manage Your Jobs</h3>
      <div className="space-y-3">
        {jobs.map(job => (
          <div key={job.id} className="flex justify-between items-center p-4 border rounded shadow-sm">
            <span>{job.title} - {job.location}</span>
            <div className="space-x-2">
              <button className="text-blue-600 hover:underline text-sm">Edit</button>
              <button onClick={() => handleDelete(job.id)} className="text-red-600 hover:underline text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerDashboard;