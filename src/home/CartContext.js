// import React, { useState } from 'react';

// export const CartContext = React.createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const incrementItem = (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCart(updatedCart);
//   };

//   const decrementItem = (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
//     );
//     setCart(updatedCart);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, incrementItem, decrementItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

