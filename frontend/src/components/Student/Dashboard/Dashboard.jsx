import React from "react";
import "./Dashboard.css";

import qrCode from "../../../assets/qr.png"; // Ensure this image exists in src/assets/
import studentAvatar from "../../../assets/student.jpg"; // Optional avatar
import doctorImage from "../../../assets/doctors.png"; // Doctors image

function Dashboard() {
  return (
    <div className="dashboard-container">
      
      {/* Header Section */}
      <header className="top-right">
        <p className="greeting">Hello, Franklin!</p>
        <img src={studentAvatar} alt="Student Avatar" className="avatar" />
      </header>

      {/* Student Information and QR Code */}
      <section className="info-section">
        <div className="student-info-box">
          <p><strong>Name:</strong> Jhon Franklin</p>
          <p><strong>Student ID:</strong> 22IT0999</p>
          <p><strong>Batch:</strong> 83</p>
        </div>

        <div className="qr-code-box">
          <img src={qrCode} alt="Student QR Code" className="qr-image" />
        </div>
      </section>

      {/* Doctors Image Section */}
      <section className="doctor-image">
        <img src={doctorImage} alt="Available Doctors" />
      </section>
      
    </div>
  );
}

export default Dashboard;
