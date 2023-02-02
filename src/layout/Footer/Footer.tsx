import { useLocation } from "react-router";
import classes from "./Footer.module.scss";

export default function Footer() {
  const { pathname } = useLocation();
  console.log("Footer");

  return pathname === "/" ? (
    <footer className={classes.footer}>Footer</footer>
  ) : null;
}
