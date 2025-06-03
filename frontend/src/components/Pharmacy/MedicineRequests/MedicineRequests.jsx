import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MedicineRequests.css";

function MedicineRequests() {
  const [pharmacy, setPharmacy] = useState("");
  const [medicine, setMedicine] = useState("Paracetamol");
  const [quantity, setQuantity] = useState(200);
  const [requestDate, setRequestDate] = useState(new Date());
  const [about, setAbout] = useState("about");

  const handleGeneratePDF = (e) => {
    e.preventDefault();
    // Add your PDF generation logic here
    alert("PDF Generated!");
  };

  const handleEmailRequest = (e) => {
    e.preventDefault();
    // Add your email sending logic here
    alert("Order Request Emailed!");
  };

  return (
    <div className="medicine-requests-container">
      <h2 className="page-title">Medicine Requests</h2>

      <div className="form-card">
        <form className="medicine-request-form">
          <label>Select External Pharmacy</label>
          <select
            value={pharmacy}
            onChange={(e) => setPharmacy(e.target.value)}
          >
            <option value="">Select External Pharmacy</option>
            <option value="Pharmacy A">Pharmacy A</option>
            <option value="Pharmacy B">Pharmacy B</option>
            <option value="Pharmacy C">Pharmacy C</option>
          </select>

          <label>Medicine</label>
          <input
            type="text"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />

          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <label>Request Date</label>
          <DatePicker
            selected={requestDate}
            onChange={(date) => setRequestDate(date)}
            dateFormat="yyyy/MM/dd"
            className="datepicker-input"
          />

          <label>About</label>
          <input
            type="text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <div className="button-group">
            <button className="pdf-btn" onClick={handleGeneratePDF}>
              Generate PDF
            </button>
            <button className="email-btn" onClick={handleEmailRequest}>
              Email Order Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MedicineRequests;
