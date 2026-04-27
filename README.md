# Swasthya - Hospital Management System 🏥

Swasthya is a comprehensive full-stack healthcare management platform designed to bridge the gap between patients and doctors. It provides a seamless experience for booking appointments, managing health records, and real-time communication.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://swasthya-0w7t.onrender.com/)

---

## 🚀 Features

- **Doctor Appointment System:** Easy booking and management of medical appointments.
- **Secure Authentication:** JWT-based secure login and registration with Firebase integration.
- **Role-based Access:** Specialized dashboards for Patients, Doctors, and Administrators.
- **Video Consultation:** Integrated video calling support via Twilio for remote consultations.
- **Health Analytics:** Visualize health data and medical history using interactive charts.
- **Real-time Notifications:** Stay updated with appointment status using Socket.io.
- **Image Management:** Profile and document uploads handled via Cloudinary.
- **OTP Verification:** Enhanced security with OTP-based authentication.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **State Management:** Redux Toolkit
- **Charts:** Recharts, Chart.js, CanvasJS
- **Communication:** Socket.io-client, Twilio Video
- **Icons:** React Icons

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Real-time:** Socket.io
- **File Handling:** Multer

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- npm or yarn

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/AMANGUPTA1406/Swasthya.git
cd Swasthya
```

### 2. Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add the following:
   ```env
   PORT=5015
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm start
   ```

### 3. Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `client` directory and add:
   ```env
   REACT_APP_SERVER_DOMAIN=http://localhost:5015/api
   REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
   REACT_APP_CLOUDINARY_PRESET=your_preset
   ```
4. Run the application:
   - **For Development:**
     ```bash
     npm start
     ```
   - **For Production (Build):**
     ```bash
     npm run build
     ```
     *Note: After building, the backend server will serve the static files from the `build` folder.*

---

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your .env files:

**Server (`/server/.env`):**
- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: Any random string for JWT encryption.
- `PORT`: Server port (default: 5015).

**Client (`/client/.env`):**
- `REACT_APP_SERVER_DOMAIN`: The URL of your backend API.
- `REACT_APP_CLOUDINARY_CLOUD_NAME`: Your Cloudinary Cloud Name.
- `REACT_APP_CLOUDINARY_PRESET`: Your Cloudinary Upload Preset.

---

## 👤 Author

**Aman Gupta**
- GitHub: [@AMANGUPTA1406](https://github.com/AMANGUPTA1406)
- Project Link: [https://github.com/AMANGUPTA1406/Swasthya](https://github.com/AMANGUPTA1406/Swasthya)
- Live Link: [https://swasthya-0w7t.onrender.com/](https://swasthya-0w7t.onrender.com/)

---



