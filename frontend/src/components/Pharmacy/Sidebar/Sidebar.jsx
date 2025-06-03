import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

// Icons
import { FiSettings, FiClipboard, FiBox, FiFileText, FiBarChart2 } from "react-icons/fi";

// ✅ Correct import path (if logo is in src/assets)
import logo from "../../../assets/logo.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="Pharmacy Logo" className="logo-img" />
      
      <ul className="menu">
        <li>
          <Link to="/" className="menu-button">
            <FiClipboard size={18} className="menu-icon" />
            Prescription Queue
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="menu-button">
            <FiBox size={18} className="menu-icon" />
            Inventory Management
          </Link>
        </li>
        <li>
          <Link to="/medicine-requests" className="menu-button">
            <FiFileText size={18} className="menu-icon" />
            Medicine Requests
          </Link>
        </li>
        <li>
          <Link to="/reports" className="menu-button">
            <FiBarChart2 size={18} className="menu-icon" />
            Reports
          </Link>
        </li>
      </ul>

      <div className="settings">
        <FiSettings size={20} />
        <span>Settings</span>
      </div>
    </div>
  );
}

export default Sidebar;
