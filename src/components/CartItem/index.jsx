import "./styles.css";

import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../store/cartSlice";

import garbageIcon from "../../assets/icon-delete.svg";
import moreIcon from "../../assets/icon-plus.svg";
import lessIcon from "../../assets/icon-minus.svg";

export default function CartItem({ id, title, productQuantity, price, image }) {
  const dispatch = useDispatch();

  return (
    <>
      <img src={`${import.meta.env.VITE_API_HOST}/mock/${image}`} alt={title} />
      <div>
        <p>{title}</p>
        <div>
          <p>{price}</p>
          <div className="inputsQuantity">
            <button
              className="less"
              onClick={() => {
                if (productQuantity > 1) {
                  dispatch(decrementQuantity(id));
                }
              }}
            >
              <img src={lessIcon} alt="" />
            </button>
            <p>{productQuantity}</p>
            <button
              className="more"
              onClick={() => dispatch(incrementQuantity(id))}
            >
              <img src={moreIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => dispatch(removeItem(id))}>
        <img src={garbageIcon} alt="" />
      </button>
    </>
  );
}
