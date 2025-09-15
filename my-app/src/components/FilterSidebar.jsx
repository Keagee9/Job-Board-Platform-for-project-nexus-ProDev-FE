
import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';

const FilterSidebar = () => {
  const { jobs, filters, updateFilters } = useContext(JobContext);

  const categories = [...new Set(jobs.map(job => job.category))];
  const locations = [...new Set(jobs.map(job => job.location))];
  const experienceLevels = [...new Set(jobs.map(job => job.experienceLevel))];

  const handleFilterChange = (filterType, value) => {
    updateFilters(filterType, value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Filter by</h2>
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        {categories.map(category => (
          <div key={category} className="flex items-center">
            <input
              type="checkbox"
              id={category}
              name={category}
              onChange={() => handleFilterChange('category', category)}
              checked={filters.category.includes(category)}
            />
            <label htmlFor={category} className="ml-2">{category}</label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Location</h3>
        {locations.map(location => (
          <div key={location} className="flex items-center">
            <input
              type="checkbox"
              id={location}
              name={location}
              onChange={() => handleFilterChange('location', location)}
              checked={filters.location.includes(location)}
            />
            <label htmlFor={location} className="ml-2">{location}</label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Experience Level</h3>
        {experienceLevels.map(level => (
          <div key={level} className="flex items-center">
            <input
              type="checkbox"
              id={level}
              name={level}
              onChange={() => handleFilterChange('experienceLevel', level)}
              checked={filters.experienceLevel.includes(level)}
            />
            <label htmlFor={level} className="ml-2">{level}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
