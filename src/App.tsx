import classes from "./App.module.scss";
import Main from "./layout/Main";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import BookingPage from "./pages/BookingPage/BookingPage";
import BookingConfirmedPage from "./pages/BookingConfirmedPage/BookingConfirmedPage";

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import OrderOnline from "./pages/OrderOnline/OrderOnline";
import Login from "./pages/Login/Login";

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "order", element: <OrderOnline /> },
      { path: "reservation", element: <BookingPage /> },
      { path: "login", element: <Login /> },
      { path: "success", element: <BookingConfirmedPage /> },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <div className={classes.app}>
        <RouterProvider router={router} />
      </div>
    </ChakraProvider>
  );
}

export default App;

//"homepage": "https://vasily-mishanin.github.io/little-lemon",
