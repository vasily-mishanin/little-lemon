import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Root() {
  return (
    <>
      <Header />
      <div style={{ flexGrow: "1", flexShrink: "0", flexBasis: "auto" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
