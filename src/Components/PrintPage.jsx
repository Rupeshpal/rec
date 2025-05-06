import React from 'react';
import { useSelector } from 'react-redux';

const PrintPage = () => {
  // Get the PDF Blob URL from the Redux store
  const pdfBlobUrl = useSelector((state) => state.pdf.pdfFile);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Print Your Lab Report</h1>

      {pdfBlobUrl ? (
        <div>
          <iframe
            src={pdfBlobUrl}
            width="100%"
            height="600px"
            title="Lab Report PDF"
          ></iframe>
          <div className="mt-4">
            <button
              onClick={() => window.print()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Print PDF
            </button>
          </div>
        </div>
      ) : (
        <p>No PDF available. Please generate a report first.</p>
      )}
    </div>
  );
};

export default PrintPage;
