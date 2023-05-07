import "./styles.css";
import { Link } from "react-router-dom";


import './styles.css';

export default function Card({id, title, thumbnail}) {


  return (
    <>
      <Link to={`article/${id}`}>
        <img src={`http://127.0.0.1:5173/mock/product/thumbnail/${thumbnail}`} alt={title} className="cardImg"/>
        <h2 className="cardTitle">{title}</h2>
      </Link>
    </>
  );
}
