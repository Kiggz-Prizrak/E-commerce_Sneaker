
import {
  createBrowserRouter,
} from "react-router-dom";

import {getAllArticles, getOneArticles} from '../api'

import Root from './Root'

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Article from "../pages/Article";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return getAllArticles();
        },
      },
      {
        path: "/article/:id",
        element: <Article />,
        loader: ({ params }) => {
          return getOneArticles(params.id);
        },
      },
    ],
  },
]);

export default router;
