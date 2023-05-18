import { useLoaderData } from "react-router-dom";
import ArticleDescription from "../../components/ArticleDescription";
import ArticleGallery from "../../components/ArticleGallery";
import Slideshow from "../../components/Slideshow";
import { useState } from "react";
import { useSelector } from "react-redux";


import './styles.css'

 
export default function Article() {

  const [openSlideshow, setOpenSlideshow] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const {
    id,
    factory,
    title,
    description,
    price,
    promotion,
    thumbnail,
    images,
  } = useLoaderData();

  // const cart = useSelector((state) => state.cart);

  // const getTotalQuantity = () => {
  //   let total = 0;
  //   cart.forEach((item) => {
  //     console.log(item)
  //     total += item.productQuantity;
  //     console.log(total)
  //   });
  //   return total;
  // };


  return (
    <div className="articlePageContainer">

      <div className="articleContainer">
        <ArticleGallery
          thumbnail={thumbnail}
          images={images}
          title={title}
          openSlideshow={openSlideshow}
          setOpenSlideshow={setOpenSlideshow}
          setSlideIndex={setSlideIndex}
        />
        <ArticleDescription
          id={id}
          factory={factory}
          title={title}
          description={description}
          price={parseFloat(price).toFixed(2)}
          promotion={promotion}
        />
      </div>

      {openSlideshow ? (
        <div className="slideshowContainer">
          <Slideshow
            thumbnail={thumbnail}
            images={images}
            title={title}
            slideIndex={slideIndex}
            openSlideshow={openSlideshow}
            setOpenSlideshow={setOpenSlideshow}
            setSlideIndex={setSlideIndex}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
