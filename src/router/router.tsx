import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import NotFound from "../pages/NotFound/NotFound";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Products from "../pages/Products/Products";
import News from "../pages/News/News";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/users",
            element: <Users />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
