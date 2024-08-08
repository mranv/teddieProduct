import React from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home.js";
import { Header } from "./Components/Header.js";
import Sidebar from "./Components/Sidebar.js";
import { Category } from "./Components/Categoryz.js";
import Product from "./Components/Product.js";
import Categoryinfo from "./Components/Categoryinfo.js";
import SignUp from "./Components/Signup.js";
import { ProductAdd } from "./Components/ProductAdd.js";
import HomePage from "./Components/HomePage.js";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!isHomePage && !isAuthPage && <Header />}
      <Outlet />
      {!isHomePage && !isAuthPage && <Sidebar />}
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/categoryinfo",
        element: <Categoryinfo />,
      },
      {
        path: "/productadd",
        element: <ProductAdd />,
      },
    ],
  },
]);

export default App;
