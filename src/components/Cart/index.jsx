import "./styles.css";

import { useSelector } from "react-redux";

import CartItem from "../CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cartContainer">
      <h2>Cart</h2>
      <ul className="cartItemList">
        {cart.map((e) => {
          return (
            <li key={e.id} className="cartItemContainer">
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
      {cart.length ? (
        <button className="purchaseBtn">purchase</button>
      ) : (
        <div className="emptyCart">
          <h3>Votre panier est vide</h3>
        </div>
      )}
    </div>
  );
}
