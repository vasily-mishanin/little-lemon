import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { scrollToSection } from "../../helpers/helpers";
import { ILink } from "../../model/types";

const isCertainLinkActive = (path: string) => {
  const hash = window.location.hash;
  const urlContainsHash = hash === path.substring(1);
  const thereIsNoHashInUrl = hash === "";
  const pathsAreAqual = path === window.location.pathname;
  if (urlContainsHash || (thereIsNoHashInUrl && pathsAreAqual)) {
    return true;
  }
  return false;
};

type TNavigationProps = {
  links: ILink[];
  direction: "row" | "column";
  color?: string;
  gap?: string;
  weight?: string;
};

export default function Navigation({
  links,
  direction,
  gap,
  color,
  weight,
}: TNavigationProps) {
  return (
    <nav className={classes.nav}>
      <ul
        className={classes.list}
        style={{ flexDirection: direction, gap: gap }}
      >
        {links.map((link) => (
          <li className={classes.item} key={link.path}>
            <NavLink
              to={link.path}
              onClick={() => {
                if (link.anchor) scrollToSection(link.anchor);
              }}
              className={({ isActive }) =>
                isActive && isCertainLinkActive(link.path)
                  ? classes.activeLink
                  : classes.link
              }
              style={{ color: color, fontWeight: weight }}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
