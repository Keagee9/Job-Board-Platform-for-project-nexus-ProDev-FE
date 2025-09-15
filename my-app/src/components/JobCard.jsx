
import React from 'react';

const JobCard = ({ title, company, location, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{company} - {location}</p>
      <p className="mt-2">{description}</p>
      <button className="bg-blue-500 text-white rounded-full py-2 px-4 mt-4 hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
