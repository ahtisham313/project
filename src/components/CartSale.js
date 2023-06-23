import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function CartSale({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);
  const navigate = useNavigate();
  return (
    <div>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div>
            <img src={cartItem.url} alt="," width={20} />
            <span> {cartItem.name} </span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span> {cartItem.quantity} </span>
            <button style={{border:1}}
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <span> Rs. {cartItem.price * cartItem.quantity} </span>
          </div>
        );
      })}

      <p>
        {" "}
        Total <span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>

      <Button onClick={(e) => navigate("/checkout")}>PAY</Button>
    </div>
  );
}

export default CartSale;