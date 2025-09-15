
import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';

const SearchBar = () => {
  const { searchTerm, updateSearchTerm } = useContext(JobContext);

  const handleSearchChange = (event) => {
    updateSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow-md p-2">
      <input
        type="text"
        placeholder="Search for jobs..."
        className="flex-grow p-2 rounded-full focus:outline-none"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
