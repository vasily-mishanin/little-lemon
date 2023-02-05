import classes from "./App.module.scss";
import Root from "./layout/Root";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingPage from "./pages/BookingPage/BookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "reservation", element: <BookingPage /> },
    ],
  },
]);

function App() {
  return (
    <div className={classes.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
