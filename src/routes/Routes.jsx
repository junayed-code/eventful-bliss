import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-3xl">The Eventful Bliss</div>,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
