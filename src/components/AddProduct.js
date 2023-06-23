import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isOnSale, setIsOnSale] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a product object
    const product = {
      name,
      price,
      description,
      image,
      isFeatured,
      isOnSale,
    };

    // Perform the desired action with the product data
    console.log("Product:", product);

    // Reset the form fields
    setName("");
    setPrice("");
    setDescription("");
    setImage(null);
    setIsFeatured(false);
    setIsOnSale(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.input}
        />
        <div style={styles.checkboxContainer}>
          <label>
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
            Featured
          </label>
          <label>
            <input
              type="checkbox"
              checked={isOnSale}
              onChange={(e) => setIsOnSale(e.target.checked)}
            />
            On Sale
          </label>
        </div>
        <button type="submit" style={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    height: "100px",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddProduct;

