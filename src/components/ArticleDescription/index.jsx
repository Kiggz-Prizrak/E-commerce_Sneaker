import { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/cartSlice";

import "./styles.css";

import moreIcon from "../../assets/icon-plus.svg";
import lessIcon from "../../assets/icon-minus.svg";

export default function ArticleDescription({
  id,
  factory,
  title,
  description,
  price,
  promotion,
  image
}) {
  const [productQuantity, setProductQuantity] = useState(0);
  const [errorQuantity, setErrorQuantity] = useState("");

  const dispatch = useDispatch();

  console.log(image)

  return (
    <div className="articleDescriptionContainer">
      <div>
        <h3 className="articleFactory">{factory}</h3>
        <h2 className="articleTilte">{title}</h2>
        <p className="articleDescription">{description}</p>
        {promotion ? (
          <div>
            <div className="priceContainer">
              <h3 className="articlePrice">
                ${parseFloat((price * promotion) / 100).toFixed(2)}
              </h3>
              <span className="articlePromotion">
                <p>{promotion}%</p>
              </span>
            </div>
            <p className="originalArticlePrice">{price}</p>
          </div>
        ) : (
          <h3 className="articlePrice">{price}</h3>
        )}
        <div className="inputsContainer">
          <div className="inputsQuantity">
            <button
              className="less"
              onClick={() => {
                if (productQuantity > 0) {
                  setProductQuantity(productQuantity - 1);
                }
              }}
            >
              <img src={lessIcon} alt="" />
            </button>
            <p>{productQuantity}</p>
            <button
              className="more"
              onClick={() => setProductQuantity(productQuantity + 1)}
            >
              <img src={moreIcon} alt="" />
            </button>
          </div>
          <button
            className="addToCartButton"
            onClick={() => {
              if (productQuantity > 0) {
                setErrorQuantity("");
                dispatch(
                  addToCart({
                    id,
                    title,
                    productQuantity,
                    price: promotion
                      ? parseFloat((price * promotion) / 100).toFixed(2)
                      : price,
                    image
                  })
                );
              } else {
                setErrorQuantity("veuillez sélectionner une quantité");
              }
            }}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#ffffff"
              />
            </svg>
            <p>Add to cart</p>
          </button>
        </div>
        <p>{errorQuantity}</p>
      </div>
    </div>
  );
}
