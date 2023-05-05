import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import SignUp from "../Pages/Signup";
import Signin from "../Pages/Signin";

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
]);
