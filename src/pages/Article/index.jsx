import { useLoaderData } from "react-router-dom";
import ArticleDescription from "../../components/ArticleDescription";
import ArticleGallery from "../../components/ArticleGallery";

export default function Article() {
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

  return (
    <div>
      <ArticleGallery thumbnail={thumbnail} image={images} />
      <ArticleDescription
        id={id}
        factory={factory}
        title={title}
        description={description}
        price={price}
        promotion={promotion}
      />
    </div>
  );
}
