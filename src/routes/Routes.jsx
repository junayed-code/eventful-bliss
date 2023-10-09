import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "../providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import Events from "../pages/Events";
import PrivateRoutes from "../routes/PrivateRoutes";

import About from "../pages/About";
import General from "../layouts/General";
import Details from "../layouts/Details";
import ErrorPage from "../pages/ErrorPage";
import Registration from "../layouts/Registration";
import ServiceDetails, { serviceDetailsLoader } from "../pages/ServiceDetails";
import EventDetails, { eventDetailsLoader } from "../pages/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <General />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <General />,
        children: [
          {
            path: "/services",
            element: <Services />,
            loader: () => fetch("/__data/services.json"),
          },
          {
            path: "/events",
            element: <Events />,
            loader: () => fetch("/__data/events.json"),
          },
        ],
      },
      {
        path: "/",
        element: <Details />,
        children: [
          {
            path: "/service/:id",
            element: <ServiceDetails />,
            loader: serviceDetailsLoader,
          },
          {
            path: "/event/:id",
            element: <EventDetails />,
            loader: eventDetailsLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <Registration />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default function Routes() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
}
