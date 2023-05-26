import { useState } from "react";
import "./styles.css";

export default function ArticleGallery({
  thumbnail,
  images,
  title,
  openSlideshow,
  setOpenSlideshow,
  setSlideIndex,
}) {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="articleGalleryContainer">
        <button
          onClick={() => {
            setSlideIndex(index);
            setOpenSlideshow(!openSlideshow);
          }}
          className="ImageVisible"
        >
          <img
            className=""
            src={`http://127.0.0.1:5173/mock/product/image/${images[index]}`}
            alt={title}
          />
        </button>

        <ul className="thumbnailGallery">
          {thumbnail.map((e, i) => (
            <li
              className={
                i === index ? "thumbnailCardSelected" : "thumbnailCard"
              }
              key={`${title}-${i}`}
            >
              <button onClick={() => setIndex(i)} className="thumbnailButton">
                <img
                  src={`http://127.0.0.1:5173/mock/product/thumbnail/${e}`}
                  alt={title}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="articleGalleryResponsiveContainer">
        <button
          className="mobileGalleryLeftBtn"
          onClick={() => {
            index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
          }}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </button>
        <img
          src={`http://127.0.0.1:5173/mock/product/image/${images[index]}`}
          alt={title}
        />
        <button
          className="mobileGalleryRightBtn"
          onClick={() => {
            index < images.length - 1? setIndex(index + 1) : setIndex(0);
          }}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
