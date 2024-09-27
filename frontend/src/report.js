import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

function ReportPage() {
  const [reportData, setReportData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the report data when the page loads
  useEffect(() => {
    axios.get('https://iamafisu.pythonanywhere.com/report')
      .then(response => {
        setReportData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching report data:', error);
        setError('Failed to load report data');
        setIsLoading(false);
      });
  }, []);

  // Function to download the report as Excel
  const downloadReport = () => {
    axios({
      url: 'https://iamafisu.pythonanywhere.com/download_report',
      method: 'GET',
      responseType: 'blob', // Important to handle binary data
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'upload_report.xlsx'); // Specify the file name
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error('Error downloading the report:', error);
        setError('Failed to download the report');
      });
  };

  return (
    <div>
      <header className="bg-white-500 text-black p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/newlogo.png" alt="gss-logo" className="w-10 h-10 mr-2" />
            <h1 className="text-xl font-bold">AHIES Backup System</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-gray-300">Upload</Link></li>
              <li><Link to="/report" className="hover:text-gray-300">Report</Link></li>
              <li><Link to="/help" className="hover:text-gray-300">Help?</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">AHIES Backup Upload Report</h2>
        {error && <p className="text-red-500">{error}</p>}
        {isLoading ? (
          <p>Please wait...</p>
        ) : (
          reportData.length > 0 ? (
            <table className="table-auto w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="px-4 py-2">Team</th>
                  <th className="px-4 py-2">File Count</th>
                  <th className="px-4 py-2">Login IDs</th>
                  <th className="px-4 py-2">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((team, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{team.team}</td>
                    <td className="border px-4 py-2">{team.file_count}</td>
                    <td className="border px-4 py-2">{team.login_ids?.map(id => id.replace('.zip', '')).join(', ') || 'No IDs'}</td>
                    <td className="border px-4 py-2">{format(new Date(team.last_modified), 'PPpp')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No uploads found</p>
          )
        )}

        <button 
          onClick={downloadReport} 
          className="bg-blue-500 text-white mt-4 px-4 py-2"
          aria-label="Download the report as Excel"
        >
          Download Report as Excel
        </button>
      </div>
    </div>
  );
}

export default ReportPage;
