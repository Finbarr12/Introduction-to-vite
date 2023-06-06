import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Block/Layout";
import DahLayout from "../Block/DahLayout";
// import Loading from "../Static/Loading";
// import Products from "../Pages/Products";
import Privateroute from "./Privateroute";
import Error from "../Pages/Error";

const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Services = lazy(() => import("../Pages/Services"));
const Contact = lazy(() => import("../Pages/Contact"));
const Products = lazy(() => import("../Pages/Products"));
const SignUp = lazy(() => import("../Pages/Signup"));
const Signin = lazy(() => import("../Pages/Signin"));
const DashHome = lazy(() => import("../Pages/DashHome"));
const DashUpload = lazy(() => import("../Pages/DashUpload"));

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/signadmin",
    element: <SignUp />,
  },

  {
    path: "/signinadmin",
    element: <Signin />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/dashboard",
    element: (
      <Privateroute>
        <DahLayout />
      </Privateroute>
    ),
    children: [
      {
        index: true,
        element: <DashHome />,
      },
      {
        path: "/dashboard/uploads",
        element: <DashUpload />,
      },
    ],
  },
]);
