import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import NavigationMobile from "../../components/NavigationMobile/NavigationMobile";
import classes from "./Header.module.scss";
import LogoImg from "../../assets/images/Logo.svg";
import { siteLinks } from "../../model/constants";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showNavBar, setShowNavBar] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let prevScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (!headerRef.current) {
        return;
      }

      if (currentScrollPosition < prevScrollPosition) {
        headerRef.current.style.transform = "translateY(0)";
      }

      if (currentScrollPosition > prevScrollPosition) {
        headerRef.current.style.transform = "translateY(-110px)";
      }

      prevScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    console.log("handleScroll");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showMobileNavbar = () => {
    setShowNavBar(true);
  };

  const closeMobileNavbar = () => {
    setShowNavBar(false);
  };

  return (
    <header className={classes.header} id="header" ref={headerRef}>
      <div className={classes.inner}>
        <Logo imageSrc={LogoImg} alt="Little Lemon Restaurant" />
        <Navigation links={siteLinks} direction="row" />
        {!showNavBar && (
          <Bars3Icon className={classes.menuBtn} onClick={showMobileNavbar} />
        )}
        {showNavBar && (
          <XMarkIcon className={classes.menuBtn} onClick={closeMobileNavbar} />
        )}

        <NavigationMobile
          links={siteLinks}
          direction="column"
          translate={showNavBar ? "translateX(0)" : "translateX(100%)"}
          onLinkClick={closeMobileNavbar}
        />
      </div>
    </header>
  );
}
