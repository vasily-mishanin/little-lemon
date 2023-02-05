import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { scrollToSection } from "../../helpers/helpers";
import { ILink } from "../../model/types";

type TNavigationProps = {
  links: ILink[];
  direction: "row" | "column";
  color?: string;
  gap?: string;
  weight?: string;
  display?: string;
  fontSize?: string;
};

export default function Navigation({
  links,
  direction,
  gap,
  color,
  weight,
  display,
  fontSize,
}: TNavigationProps) {
  const isCertainLinkActive = (link: ILink) => {
    if (window.location.pathname === "/") {
      return (
        link.anchor === window.location.hash.substring(1) ||
        (!link.anchor && window.location.hash === "")
      );
    }
    return link.path === window.location.pathname.substring(1);
  };

  console.log(links);

  return (
    <nav className={classes.nav} style={{ display, fontSize }}>
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
                if (link.path === "/") scrollToSection("header");
              }}
              className={({ isActive }) =>
                isActive && isCertainLinkActive(link)
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
