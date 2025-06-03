import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import TopBar from "./components/Pharmacy/TopBar/TopBar";
import Sidebar from "./components/Pharmacy/Sidebar/Sidebar";
import PrescriptionQueue from "./components/Pharmacy/PrescriptionQueue/PrescriptionQueue";
import InventoryManagement from "./components/Pharmacy/inventory/InventoryManagement";
import MedicineRequests from "./components/Pharmacy/MedicineRequests/MedicineRequests";
import Reports from './components/Pharmacy/Reports/Reports'; // ✅ import the file
import Dashboard from "./components/Student/Dashboard/Dashboard";


function App() {
  return (
    <Router>
      <div className="app-container">
        <TopBar />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<PrescriptionQueue />} />
              <Route path="/inventory" element={<InventoryManagement />} />
              <Route path="/medicine-requests" element={<MedicineRequests />} />
              <Route path="/reports" element={<Reports />} />
               <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>



  );
}

export default App;
