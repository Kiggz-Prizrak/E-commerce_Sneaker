import { useState } from "react";
import "./styles.css";

import closeIcon from "../../assets/icon-close.svg";
import arrow from "../../assets/icon-previous.svg"

export default function Slideshow({
  thumbnail,
  images,
  title,
  slideIndex,
  openSlideshow,
  setOpenSlideshow,
  setSlideIndex,
}) {
  console.log(images);

  const [index, setIndex] = useState(slideIndex);

  return (
    <div className="slideShowContainer">
      <button
        autoFocus
        className="closeButton"
        onClick={() => {
          setSlideIndex(index);
          setOpenSlideshow(!openSlideshow);
        }}
      >
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#ffffff"
          />
        </svg>
      </button>

      <div className="slideContainer">
        <button
          onClick={() => {
            index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
          }}
          className="leftArrow"
        >
          <img src={arrow} alt="previous" />
        </button>
        <img
          className="slide"
          src={`http://127.0.0.1:5173/mock/product/image/${images[index]}`}
          alt={title}
        />
        <button
          onClick={() => {
            index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
          }}
          className="rightArrow"
        >
          <img src={arrow} alt="next" />
        </button>
      </div>

      <ul className="slidesGallery">
        {thumbnail.map((e, i) => (
          <li
            className={i === index ? "slideSelected" : ""}
            key={`${title}-${i}`}
          >
            <button onClick={() => setIndex(i)}>
              <img
                src={`http://127.0.0.1:5173/mock/product/thumbnail/${e}`}
                alt={title}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
