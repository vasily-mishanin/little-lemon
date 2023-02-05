import { NavLink } from "react-router-dom";
import classes from "./NavigationMobile.module.scss";
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
  onLinkClick: () => void;
  width?: string;
  translate?: string;
};

export default function NavigationMobile({
  links,
  direction,
  width,
  translate,
  onLinkClick,
}: TNavigationProps) {
  return (
    <nav className={classes.nav} style={{ width, transform: translate }}>
      <ul className={classes.list} style={{ width, flexDirection: direction }}>
        {links.map((link) => (
          <li className={classes.item} key={link.path}>
            <NavLink
              to={link.path}
              onClick={() => {
                if (link.anchor) scrollToSection(link.anchor);
                onLinkClick();
              }}
              className={({ isActive }) =>
                isActive && isCertainLinkActive(link.path)
                  ? classes.activeLink
                  : classes.link
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
