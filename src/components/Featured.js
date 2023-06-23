// import './App.css';
// import CartHeader from './components/CartHeader';
// import ProductList from './components/ProductList';
// import CartList from './components/CartList';
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import ProductList from "./ProductList";
import { useState } from "react";
// import './Featured.css';

// const Featured=()=>{
// const [product, setProduct] = useState([
//     {
//       url: '/picture/f1.png',
//       name: 'women winter dress',

//       price: 'Rs.1999'
//     },
//     {
//       url: '/picture/f2.png',
//       name: 'women frok , red dress ',

//       price: 'Rs.2599'
//     },
//     {
//       url: '/picture/f3.jpg',
//       name: 'frok sheath dress ',

//       price: 'Rs.50000'
//     },
//     {
//       url: '/picture/f4.jpg',
//       name: 'jumper for winter wear',

//       price: 'Rs.4000'
//     },
//     {
//       url: '/picture/f5.jpg',
//       name: 'ladies kurta , blue , design ',

//       price: 'Rs.2000'
//     },
//     {
//       url: '/picture/f6.jpg',
//       name: 'ladies wedding dress|walima dress|red',

//       price: 1500
//     },
//   ])

//   const [cart, setCart] = useState([])
//   const [showCart, setShowCart] = useState(false)

//   const addToCart = (data) => {
//     setCart([...cart, { ...data, quantity: 1 }])
//   }

//   const handleShow = (value) => {
//     setShowCart(value)
//   }

//   return (

//     <div>
//       <CartHeader count={cart.length}
//         handleShow={handleShow} ></CartHeader>

//       {
//         showCart ?
//           <CartList cart={cart} ></CartList> :
//           <ProductList product={product} addToCart={addToCart} ></ProductList>
//       }

//     </div>

//   );
// }

// export default Featured;
// import CartHeader from './CartHeader';
// import CartList from './CartList';
// import ProductList from './ProductList';
// import { useState } from 'react';
// import './Featured.css';

const Featured = () => {
  const [product] = useState([
    {
      url: "/picture/f1.png",
      name: "women winter dress",
      price: 1999,
    },
    {
      url: "/picture/f2.png",
      name: "women frok , red dress ",

      price: "Rs.2599",
    },
    {
      url: "/picture/f3.jpg",
      name: "frok sheath dress ",

      price: "Rs.50000",
    },
    {
      url: "/picture/f4.jpg",
      name: "jumper for winter wear",

      price: "Rs.4000",
    },
    {
      url: "/picture/f5.jpg",
      name: "ladies kurta , blue , design ",

      price: "Rs.2000",
    },
    {
      url: "/picture/f6.jpg",
      name: "ladies wedding dress|walima dress|red",

      price: 1500,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <CartHeader count={cart.length} handleShow={handleShow} />
      {showCart ? (
        <CartList cart={cart} />
      ) : (
        <ProductList product={product} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Featured;
