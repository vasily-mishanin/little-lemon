import classes from "./App.module.scss";
import Main from "./layout/Main";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import BookingPage from "./pages/BookingPage/BookingPage";
import BookingConfirmedPage from "./pages/BookingConfirmedPage/BookingConfirmedPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "reservation", element: <BookingPage /> },
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
