import React, { useState } from "react";

const AppointmentModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [agreed, setAgreed] = useState(false); // State for checkbox

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if user has agreed to the terms
    if (!agreed) {
      alert("You must agree to the Privacy Policy and Terms of Service.");
      return;
    }

    // Handle form submission logic here
    console.log(
      `Appointment Scheduled:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDetails: ${details}`
    );

    // Reset form fields
    setName("");
    setPhone("");
    setEmail("");
    setDetails("");
    setAgreed(false); // Reset checkbox state

    // Close modal after submission
    onClose();
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  // Inline styles
  const modalStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: 9999, // Set z-index to 9999
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };

  const modalContentStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "600px", // Max width for desktop
    textAlign: "center",
  };

  const closeButtonStyle = {
    color: "#aaa",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px", // Maintain size for desktop
    border: "none", // Remove all borders
    borderBottom: "1px solid #ccc", // Add only bottom border
    outline: "none", // Remove outline on focus
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none", // Remove border
    backgroundColor: "black",
    color: "#fff",
    fontSize: "16px", // Maintain size for desktop
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={onClose}>
          &times;
        </span>
        <h2 style={{ fontSize: "1.5em" }}>Schedule an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <textarea
            placeholder="Messages"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            style={{
              ...inputStyle,
              height: "20px", // Set a reasonable height for the textarea
              resize: "none", // Prevent resizing of the textarea
            }}
          ></textarea>

          <label style={{ fontSize: "0.8em", lineHeight: "1.5", display: "block", margin: "10px 0" }}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              style={{ marginRight: "10px", verticalAlign: "middle" }}
            />
            By providing your contact information, you agree to our{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Privacy Policy
            </span>
            ,{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Terms of Service
            </span>{" "}
            and consent to receive marketing communications.
          </label>

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Add CSS for media queries
const styles = {
  '@media (max-width: 600px)': {
    modalContentStyle: {
      padding: '20px', // Reduced padding for small screens
      width: '90%',
      maxWidth: '100%', // Full width on small screens
    },
    closeButtonStyle: {
      fontSize: '24px', // Smaller close button
    },
    inputStyle: {
      fontSize: '14px', // Smaller font size for inputs
    },
    buttonStyle: {
      fontSize: '14px', // Smaller font size for button
    },
  },
};

export default AppointmentModal;
