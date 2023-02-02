import classes from "./App.module.scss";
import Root from "./layout/Root";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createHashRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu /> },
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
