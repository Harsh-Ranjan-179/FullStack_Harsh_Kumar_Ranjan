import React, { useState } from 'react';

const JobCard = ({ title, company }) => {
  // State to track if THIS specific card has been applied to
  const [hasApplied, setHasApplied] = useState(false);

  return (
    <div className="p-5 border rounded-lg shadow-sm flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{company}</p>
      </div>
      
      {/* Apply Button UI */}
      <button 
        onClick={() => setHasApplied(true)}
        disabled={hasApplied}
        className={`px-4 py-2 rounded font-medium transition ${
          hasApplied 
            ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {hasApplied ? "Applied ✓" : "Apply Now"}
      </button>
    </div>
  );
};

export default JobCard;