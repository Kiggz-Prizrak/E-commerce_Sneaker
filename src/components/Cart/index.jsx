import "./styles.css";

import { useSelector } from "react-redux";

import cartIcon from "../../assets/icon-cart.svg";

import CartItem from "../CartItem";

export default function Cart() {
  // const [itemList, setItemList] = useState([]);

  const cart = useSelector((state) => state.cart);

  // useEffect(() => {
  //   setItemList(cart);
  // }, [cart]);

  // console.log(cart);

  return (
    <div className="cartContainer">
      <h2>Cart</h2>
      <ul>
        {cart.map((e) => {
          console.log(e.id)
          return (
            <li key={e.id}>
              <CartItem
                id={e.id}
                title={e.title}
                quantity={e.quantity}
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
