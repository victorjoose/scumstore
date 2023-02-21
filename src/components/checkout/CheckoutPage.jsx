import React, { useState } from "react";
import "./checkout.css";

function Checkout() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission
  }

  return (
    <div className="checkout-container">
      <div className="checkout-section">
        <h2 className="checkout-section-header">Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              id="phone-number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
          <button className="checkout-back-button">Back</button>
          <button className="checkout-confirm-button" type="submit">
            Confirm Purchase
          </button>
        </form>
      </div>
      <div className="checkout-section">
        <h2 className="checkout-section-header">Selected Items</h2>
        {/* Render selected items */}
      </div>
    </div>
  );
}

export default Checkout;
