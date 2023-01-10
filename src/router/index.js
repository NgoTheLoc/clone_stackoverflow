import { Navigate, useRoutes } from "react-router-dom";

import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

import Questions from "../pages/Questions";
import AskQuestion from "../pages/Questions/AskQuestion";
import DetailQuestion from "../pages/Questions/DetailQuestion";
import Tags from "../pages/Tags";
import Users from "../pages/Users";
import Companies from "../pages/Companies";
import Home from "../pages/Home";
import { useSelector } from "react-redux";

function Router() {
  const isLogin = useSelector((state) => state.user.isLogin);

  let routes = useRoutes([
    { path: "", element: <Home /> },
    {
      path: "question",
      element: <Questions />,
      children: [
        {
          path: "ask",
          element: <AskQuestion />,
        },
        { path: ":id", element: <DetailQuestion /> },
      ],
    },
    { path: "tags", element: <Tags /> },
    { path: "users", element: <Users /> },
    { path: "companies", element: <Companies /> },
    {
      path: "log-in",
      element: isLogin ? <Home /> : <Login />,
    },
    {
      path: "sign-up",
      element: isLogin ? <Home /> : <Signup />,
    },
    // {path: "*",element: <NotFound />},
  ]);

  return routes;
}

export default Router;
