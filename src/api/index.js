import { ENDPOINT_PRODUCT } from '../variables'

function getAllArticles() {
  return fetch(`${import.meta.env.VITE_API_HOST}${ENDPOINT_PRODUCT}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));
}
function getOneArticles(id) {
  return fetch(`${import.meta.env.VITE_API_HOST}${ENDPOINT_PRODUCT}`)
    .then((res) => res.json())
    .then((res) => res.find((e) => e.id == id))
    .catch((error) => console.log(error));
}

export { getAllArticles, getOneArticles };
