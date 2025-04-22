import React from 'react';
import { useSelector } from 'react-redux';  // Import useSelector

const PageHeader = () => {
  const pageTitle = useSelector(state => state.pageTitle);  // Access pageTitle from Redux

  return (
    <div className="pt-20 pb-4 px-6 bg-white shadow text-2xl font-semibold text-gray-800">
      {pageTitle}  {/* Display current page title */}
    </div>
  );
};

export default PageHeader;
