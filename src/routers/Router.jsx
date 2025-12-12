import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import Create from "../pages/Create";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Edit from "../pages/Edit";
import PostDetails from "../pages/PostDetail";
import PostByAuthor from "../pages/PostByAuthor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "postDetail/:id",
        element: <PostDetails />,
      },
      {
        path: "postByAuthor/:tag",
        element: <PostByAuthor />,
      },
    ],
  },
]);
export default router;
