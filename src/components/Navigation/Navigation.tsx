import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive && window.location.hash === ""
                ? classes.activeLink
                : classes.link
            }
          >
            {" "}
            Home{" "}
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="#about"
            className={({ isActive }) =>
              isActive && window.location.hash === "#about"
                ? classes.activeLink
                : classes.link
            }
          >
            About
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="menu"
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
          >
            {" "}
            Menu{" "}
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="reservation"
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
          >
            {" "}
            Reservations{" "}
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="order"
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
          >
            {" "}
            Order Online{" "}
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
          >
            {" "}
            Login{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
