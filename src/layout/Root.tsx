import { Outlet, useLocation } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Root() {
  const location = useLocation();
  const includedPathnames = ["/"]; //  where at to show Footer

  return (
    <>
      <Header />
      <div style={{ flexGrow: "1", flexShrink: "0", flexBasis: "auto" }}>
        <Outlet />
      </div>
      {includedPathnames.includes(location.pathname) && <Footer />}
    </>
  );
}
