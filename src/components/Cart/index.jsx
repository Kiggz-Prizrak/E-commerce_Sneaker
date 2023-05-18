import "./styles.css";

import { useSelector } from "react-redux";

import cartIcon from "../../assets/icon-cart.svg";
import CartItem from "../CartItem";

export default function Cart() {

  const cart = useSelector((state) => state.cart);



  return (
    <div className="cartContainer">
      <h2>Cart</h2>
      <ul>
        {cart.map((e) => {
          console.log(e)
          return (
            <li key={e.id}>
              <CartItem
                id={e.id}
                title={e.title}
                productQuantity={e.productQuantity}
                price={e.price}
                image={e.image}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
