import Card from "../../components/Card";
import { useLoaderData } from "react-router-dom";

import './styles.css'

export default function Home() {
  const data = useLoaderData();

  return (
    <div>
      <ul>
        {data.map(({ id, title, thumbnail }) => (
          <li key={id}>
            <Card title={title} id={id} thumbnail={thumbnail[0]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
