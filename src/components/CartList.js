// import { useEffect, useState } from "react";
// import "../App.css";
// import { Button } from "@material-tailwind/react";
// import { useNavigate } from "react-router-dom";

// function CartList({ cart }) {
//   const [CART, setCART] = useState([]);

//   useEffect(() => {
//     setCART(cart);
//   }, [cart]);
//   const navigate = useNavigate();
//   return (
//     <div>
//       {CART?.map((cartItem, cartindex) => {
//         return (
//           <div>
//             <img src={cartItem.url} alt="," width={20} />
//             <span> {cartItem.name} </span>
//             <button
//               onClick={() => {
//                 const _CART = CART.map((item, index) => {
//                   return cartindex === index
//                     ? {
//                         ...item,
//                         quantity: item.quantity > 0 ? item.quantity - 1 : 0,
//                       }
//                     : item;
//                 });
//                 setCART(_CART);
//               }}
//             >
//               -
//             </button>
//             <span> {cartItem.quantity} </span>
//             <button style={{border:1}}
//               onClick={() => {
//                 const _CART = CART.map((item, index) => {
//                   return cartindex === index
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item;
//                 });
//                 setCART(_CART);
//               }}
//             >
//               +
//             </button>
//             <span> Rs. {cartItem.price * cartItem.quantity} </span>
//           </div>
//         );
//       })}

//       <p>
//         {" "}
//         Total <span></span>
//         {CART.map((item) => item.price * item.quantity).reduce(
//           (total, value) => total + value,
//           0
//         )}
//       </p>

//       <Button onClick={(e) => navigate("/checkout")}>PAY</Button>
//     </div>
//   );
// }

// export default CartList;


import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);
  
  const navigate = useNavigate();
  

  const handleDelete = (index) => {
    const updatedCart = CART.filter((item, i) => i !== index);
    setCART(updatedCart);
  };

  const handlePayButton=()=>{
    navigate('/checkout');
  }

  return (
    <div>
      {CART?.map((cartItem, cartIndex) => {
        return (
          <div key={cartIndex}>
            <img src={cartItem.url} alt="," width={20} />
            <span>{cartItem.name}</span>
            <button
              onClick={() => {
                const updatedCart = CART.map((item, index) => {
                  return cartIndex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(updatedCart);
              }}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              style={{ border: 1 }}
              onClick={() => {
                const updatedCart = CART.map((item, index) => {
                  return cartIndex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(updatedCart);
              }}
            >
              +
            </button>
            <span>Rs. {cartItem.price * cartItem.quantity}</span>
            <Button onClick={() => handleDelete(cartIndex)}>Delete</Button>
          </div>
        );
      })}

      <p>
        Total:{" "}
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>

      <Button onClick={handlePayButton}>PAY</Button>
    </div>
  );
}

export default CartList;




