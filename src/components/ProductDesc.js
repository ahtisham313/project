import { useParams } from 'react-router-dom';

function ProductDesc({ product }) {
  const { productId } = useParams();

  // Find the selected product based on the productId from URL params
  const selectedProduct = product.find((p) => p.id === parseInt(productId));

  // If the selected product is not found, display a message
  if (!selectedProduct) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>{selectedProduct.name}</h2>
      <p>Price: {selectedProduct.price}</p>
      <img src={selectedProduct.image} alt={selectedProduct.name} />
      <p>{selectedProduct.description}</p>
      {/* Add any other product details you want to display */}
    </div>
  );
}

export default ProductDesc;
