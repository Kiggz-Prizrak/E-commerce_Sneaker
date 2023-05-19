import Card from "../../components/Card";
import { useLoaderData } from "react-router-dom";


import './styles.css'
import { useSelector } from "react-redux";

export default function Home() {
  const data = useLoaderData();

  

  return (
    <div className="homePageContainer">
      <ul className="cardList">
        {data.map(({ id, title, thumbnail }, i) => (
          <li key={i} className="card">
            <Card title={title} id={id} thumbnail={thumbnail[0]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
