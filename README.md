# AHIES Backup Application

This is a web-based file backup application that allows users to upload files, rename them with a custom 4-digit ID, zip the files, and store them in Google Drive. The application is built using a React.js frontend and a Flask backend, with Google Drive integration for cloud storage.

## Features

- **File Upload**: Users can select multiple files to upload.
- **Custom ID**: A 4-digit ID can be entered to rename the uploaded files.
- **Zipping and Uploading**: The selected files are zipped before uploading to Google Drive.
- **Google Drive Integration**: Uses Google Drive API to securely store files in a shared folder.
- **Alerts**: SweetAlert2 is used for user notifications on upload status or missing information.

## Tech Stack

### Frontend:
- **React.js**: JavaScript library for building the user interface.
- **Axios**: For sending HTTP requests to the backend.
- **SweetAlert2**: For displaying alerts.
- **Tailwind CSS**: For styling the frontend.

### Backend:
- **Flask**: Python microframework for handling backend logic.
- **Google Drive API**: To upload files to a Google Drive folder using a service account.
- **Docker**: For containerizing the backend application.
- **Flask-CORS**: Enables cross-origin requests from the frontend.

## Setup Instructions

### Prerequisites
- Node.js (for frontend)
- Python 3.8+ (for backend)
- Docker (optional, for containerization)
- Google Cloud Service Account with Drive API access

### Environment Variables
Create a `.env` file in the backend directory and set the following variables:
```
GOOGLE_CREDENTIALS=<Base64 encoded Google Service Account JSON>
SHARED_GOOGLE_DRIVE_FOLDER_ID=<Google Drive Folder ID>
```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the frontend development server:
    ```bash
    npm start
    ```

### Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the Flask development server:
    ```bash
    flask run
    ```

### Docker Setup (Optional)
1. Build the Docker image:
    ```bash
    docker build -t backup-app .
    ```
2. Run the Docker container:
    ```bash
    docker run -p 5000:5000 backup-app
    ```

### Usage
1. Go to the frontend URL (usually `http://localhost:3000`).
2. Select files, enter a 4-digit ID, and choose your team.
3. Click upload to backup your files to Google Drive.

## Contribution
Feel free to fork this repository and make improvements. Pull requests are welcome!
