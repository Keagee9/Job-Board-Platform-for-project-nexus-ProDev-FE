
import React, { useContext } from 'react';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import FilterSidebar from './components/FilterSidebar';
import { JobContext } from './context/JobContext';

const App = () => {
  const { jobs, loading, error, filters, searchTerm } = useContext(JobContext);

  const filteredJobs = jobs.filter(job => {
    if (filters.category.length > 0 && !filters.category.includes(job.category)) {
      return false;
    }
    if (filters.location.length > 0 && !filters.location.includes(job.location)) {
      return false;
    }
    if (filters.experienceLevel.length > 0 && !filters.experienceLevel.includes(job.experienceLevel)) {
      return false;
    }
    if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-center">Job Board</h1>
      </header>
      <div className="container mx-auto p-4">
        <SearchBar />
        <div className="flex mt-4">
          <div className="w-1/4">
            <FilterSidebar />
          </div>
          <div className="w-3/4 ml-4">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && filteredJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
