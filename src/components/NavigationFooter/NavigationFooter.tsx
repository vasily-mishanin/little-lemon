import { NavLink } from "react-router-dom";
import { ILink } from "../../model/types";
import classes from "./NavigationFooter.module.scss";

export default function NavigationFooter({ links }: { links: ILink[] }) {
  const isLinkActive = (isActive: boolean, link: ILink) =>
    isActive &&
    (link.path === window.location.hash ||
      (link.path === "/" && window.location.hash === ""));

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {links.map((link) => (
          <li className={classes.item}>
            <NavLink
              to={link.path}
              className={({ isActive }) => {
                if (isLinkActive(isActive, link)) {
                  return classes.activeLink;
                } else {
                  return classes.link;
                }
              }}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
