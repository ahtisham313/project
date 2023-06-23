// import React, { useState, useContext } from 'react';
// import { CartContext } from './CartContext';
// import ProductCard from './ProductCard';
// import './Sale.css';
// const Sale = () => {
//     const { cart, addToCart, incrementItem, decrementItem } = useContext(CartContext);

//     const products = [
//       {
//         id: 1,
//         name: 'Product 1',
//         price: 10,
//       },
//       {
//         id: 2,
//         name: 'Product 2',
//         price: 20,
//       },
//       // Add more products as needed
//     ];

//     return (
//       <div className="sale-container">
//         <h2>Products</h2>
//         <div className="product-list">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//               incrementItem={incrementItem}
//               decrementItem={decrementItem}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default Sale;

// // import CartHeader from './CartHeader';
// // import CartList from './CartList';
// import ProductCard from './ProductList';
// import { useState } from 'react';
// // import './Featured.css';

// const Featured=()=>{
// const [product, setProduct] = useState([
//     {
//       url: '/picture/f1.png',
//       name: 'women winter dress',
//       // category: 'Shoes',
//       // seller: 'AMZ Seller Ghz',
//       price: 1999
//     },
//     {
//       url: '/picture/f2.png',
//       name: 'women frok , red dress ',
//       // category: 'Watches',
//       // seller: 'Watch Ltd Siyana',
//       price: 2599
//     },
//     {
//       url: '/picture/f3.jpg',
//       name: 'frok sheath dress ',
//       // category: 'Laptops',
//       // seller: 'Delhi Laptops',
//       price: 50000
//     },
//     {
//       url: '/picture/f4.jpg',
//       name: 'jumper for winter wear',
//       // category: 'CCTV',
//       // seller: 'Camron LTD',
//       price: 4000
//     },
//     {
//       url: '/picture/f5.jpg',
//       name: 'ladies kurta , blue , design ',
//       // category: 'Watches',
//       // seller: 'Watch Ltd',
//       price: 2000
//     },
//     {
//       url: '/picture/f6.jpg',
//       name: 'ladies wedding dress|walima dress|red',
//       // category: 'Cup',
//       // seller: 'ABS Ltd',
//       price: 100
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
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
//     Button,
//   } from "@material-tailwind/react";

// const Sale=()=>{
//    return(
//         <div>

//     <Card className="w-96">
//       <CardHeader shadow={false} floated={false} className="h-96">
//         <img
//           src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
//           className="w-full h-full object-cover"
//         />
//       </CardHeader>
//       <CardBody>
//         <div className="flex items-center justify-between mb-2">
//           <Typography color="blue-gray" className="font-medium">
//             Apple AirPods
//           </Typography>
//           <Typography color="blue-gray" className="font-medium">
//             $95.00
//           </Typography>
//         </div>
//         <Typography variant="small" color="gray" className="font-normal opacity-75">
//           With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button
//           ripple={false}
//           fullWidth={true}
//           className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
//         >
//           Add to Cart
//         </Button>
//       </CardFooter>
//     </Card>

//         </div>
//     );
// }
// export default Sale;

import SaleHeader from "../components/SaleHeader";
// import CartSale from './CartSale';
import SaleList from "../components/SaleList";
import { useState } from "react";
import CartSale from "../components/CartSale";
const Sale = () => {
  const [product] = useState([
    {
      url: "/picture/ac1.jpg",
      name: "jewellry ear rings",
      price: "Rs.999",
    },
    {
      url: "/picture/ac2.jpg",
      name: "ear rings jewellry ",

      price: "Rs.599",
    },
    {
      url: "/picture/e2.jpg",
      name: "kurti dress ",

      price: "Rs.5000",
    },
    {
      url: "/picture/c1.jpg",
      name: "night wear",

      price: "Rs.1000",
    },
    {
      url: "/picture/e1.jpg",
      name: "beach wear ",

      price: "Rs.2000",
    },
    {
      url: "/picture/f2.png",
      name: "sleeveless frok|red",

      price: "Rs.1500",
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
      <SaleHeader count={cart.length} handleShow={handleShow} />
      {showCart ? (
        <CartSale cart={cart} />
      ) : (
        <SaleList product={product} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Sale;
