import React, { useState } from "react";

function CheckOut() {
  const [accountNumber, setAccountNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation or data processing here
    // For this example, we'll just log the entered data
    console.log("Account Number:", accountNumber);
    console.log("Phone Number:", phoneNumber);
    console.log("PIN:", pin);
  };

  return (
    <form
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#f2f2f2",
        borderRadius: "8px",
      }}
      onSubmit={handleSubmit}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Checkout</h2>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="accountNumber">Account Number</label>
        <input
          type="text"
          id="accountNumber"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="pin">PIN</label>
        <input
          type="password"
          id="pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}

// export default CheckoutForm;


export default CheckOut;



