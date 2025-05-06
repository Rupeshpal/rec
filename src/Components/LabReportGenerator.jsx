import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setPdfFile } from '../redux/pdfSlice';
import html2pdf from 'html2pdf.js';
import LabReport from './Labreport';

const LabReportGenerator = () => {
  const dispatch = useDispatch();
  const reportRef = useRef();
  const [pdfUrl, setPdfUrl] = React.useState(null); // State to store the generated PDF URL

  const generateAndStorePdf = async () => {
    const element = reportRef.current;

    const opt = {
      margin: 0.3,
      filename: 'lab-report.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .outputPdf('bloburl')
      .then((blobUrl) => {
        dispatch(setPdfFile(blobUrl)); // Save PDF URL in Redux store
        setPdfUrl(blobUrl); // Set PDF URL to state

        alert('PDF ready to print!');
        
        // Trigger printing immediately after the PDF is generated
        const printWindow = window.open(blobUrl, '_blank');
        
        if (printWindow) {
          printWindow.print(); // Open in a new window and trigger print dialog
          printWindow.onafterprint = () => {
            printWindow.close(); // Close the print window after printing
          };
        }
      });
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <div ref={reportRef}>
        <LabReport />
      </div>
      <button
        onClick={generateAndStorePdf}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate Lab Report PDF
      </button>
    </div>
  );
};

export default LabReportGenerator;
