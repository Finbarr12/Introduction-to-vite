import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Block/Layout";
import DahLayout from "../Block/DahLayout";

const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Services = lazy(() => import("../Pages/Services"));
const Contact = lazy(() => import("../Pages/Contact"));
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
    path: "/dashboard",
    element: <DahLayout />,
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
