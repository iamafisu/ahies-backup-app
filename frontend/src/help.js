import React from 'react';

function Help() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-6 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">How to Use the AHIES Backup System</h1>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">Step 1: Select Your Team</h2>
          <p>Use the dropdown to select your team from the list. Each team has its own designated folder where your files will be uploaded.</p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">Step 2: Enter Your 4-digit Login ID</h2>
          <p>Input your 4-digit login ID in the text field. This ID will be used to rename and zip your files before uploading.</p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">Step 3: Select Files to Upload</h2>
          <p>Click on the "Choose Files" button to select the files you wish to upload. You can select multiple files at once.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <br/>
            <li>Navigate to Internal Storage on your device.</li>
            <li>Go to the following directory: <span className="break-words font-bold">Android/data/gov.census.cspro.csentry/files/csentry/AHIESPLUSQ5S/Data</span></li>
            <li>Select all the files within the Data folder for upload.</li>
            <br/>
            <p className='font-bold'>Note:</p>
            <li>If the android/data folder appears empty, please use a laptop to complete the process.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">Step 4: Upload</h2>
          <p>Once you've selected your files and entered your login ID, click the "Upload" button. You will see a message confirming the upload status.</p>
        </div>
        <br/><br/>
        <div className="text-center">
          <a href="/" className="text-blue-500 underline">Back to Upload Page</a>
        </div><br/>
        <div className="text-center mb-4">
        <h2 className="font-semibold mb-2">For assistance, we’re available 24/7. Feel free to contact us via:</h2>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>Phone (Calls): 0209460083 / 0545460883</li>
            <li>WhatsApp: 0209460083</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Help;
