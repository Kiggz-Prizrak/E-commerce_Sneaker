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
    <div className="articleGalleryContainer">
      <button onClick={() => {
        setSlideIndex(index)
        setOpenSlideshow(!openSlideshow)
      }} className="ImageVisible">
        <img
          className=""
          src={`http://127.0.0.1:5173/mock/product/image/${images[index]}`}
          alt={title}
        />
      </button>

      <ul className="thumbnailGallery">
        {thumbnail.map((e, i) => (
          <li
            className={i === index ? "thumbnailCardSelected" : "thumbnailCard"}
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
  );
}
