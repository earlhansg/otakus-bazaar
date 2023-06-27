import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import CheckoutLayout from "./layouts/CheckoutLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/checkout",
    element: <CheckoutLayout />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}
export default App;
