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
    <div>
      <button
        className="closeButton"
        onClick={() => {
          setSlideIndex(index);
          setOpenSlideshow(!openSlideshow);
        }}
      >
        <img src={closeIcon} alt="close" />
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
