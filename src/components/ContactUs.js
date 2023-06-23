// import React from 'react';
// // import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       <h1>Contact Us</h1>
//       <div className="contact-details">
//         <div className="contact-item">
//           {/* <FaPhone className="contact-icon" /> */}
//           <p>+1 123-456-7890</p>
//         </div>
//         <div className="contact-item">
//           {/* <FaEnvelope className="contact-icon" /> */}
//           <p>info@example.com</p>
//         </div>
//         <div className="contact-item">
//           {/* < className="contact-icon" /> */}
//           <p>123 Main St, City, Country</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform the desired action with the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      <p style={styles.description}>
        If you have any questions or inquiries, please feel free to contact us
        using the information below:
      </p>
      <div style={styles.contactInfo}>
        <div style={styles.infoItem}>
          <span style={styles.label}>Email:</span> stylady@gmail.com
        </div>
        <div style={styles.infoItem}>
          <span style={styles.label}>Phone:</span> +92234567890
        </div>
        <div style={styles.infoItem}>
          <span style={styles.label}>Address:</span> albadr street, mandian, Abbottabad
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  contactInfo: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
  },
  infoItem: {
    fontSize: "14px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "10px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ContactUs;
