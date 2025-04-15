import React, { useState, useRef, useEffect } from 'react';

const DischargeSummary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [showSearching, setShowSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef();

  const sampleData = [
    'HIS Number: 12345',
    'Patient: John Doe',
    'Patient: Jane Smith',
    'HIS Number: 67890',
  ];

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();

    if (term) {
      setShowSearching(true);
      const results = sampleData.filter((item) =>
        item.toLowerCase().includes(term)
      );
      setFilteredResults(results);
      setShowResults(results.length > 0);
      setShowSearching(results.length === 0);
    } else {
      setShowResults(false);
      setShowSearching(false);
    }
  };

  const handleSelectResult = (value) => {
    setSearchTerm(value);
    setShowResults(false);
  };

  // Hide dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
        setShowSearching(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-200 font-sans min-h-screen">
      {/* Topbar can be imported here */}
      {/* <Topbar /> */}

      <div className="flex pt-24 justify-center items-start">
        <div className="w-full md:max-w-2xl p-8">
          {/* Search Section */}
          <div ref={searchRef} className="flex justify-center items-center w-full space-x-2">
            <input
              type="text"
              placeholder="Search with HIS Number or Patient Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch();
              }}
            />
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-teal-500 text-white rounded-r-md hover:bg-teal-600"
            >
              Search
            </button>
          </div>

          {/* Searching message */}
          {showSearching && (
            <div className="w-full bg-white border border-gray-300 mt-5 rounded-md shadow-lg text-center text-gray-700 py-2">
              Searching...
            </div>
          )}

          {/* Results */}
          {showResults && (
            <div className="w-full bg-white border border-gray-300 mt-2 rounded-md shadow-lg">
              {filteredResults.map((result, index) => (
                <p
                  key={index}
                  onClick={() => handleSelectResult(result)}
                  className="p-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                >
                  {result}
                </p>
              ))}
            </div>
          )}

          {/* Placeholder for discharge records */}
          <div className="bg-white p-8 rounded-lg shadow-md mt-10">
            <p className="text-gray-600">Patient discharge records and details will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DischargeSummary;
