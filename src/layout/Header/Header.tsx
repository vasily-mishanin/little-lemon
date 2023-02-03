import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import classes from "./Header.module.scss";
import LogoImg from "../../assets/images/Logo.svg";
import { siteLinks } from "../../model/constants";

export default function Header() {
  return (
    <header className={classes.header} id="header">
      <div className={classes.inner}>
        <Logo imageSrc={LogoImg} alt="Little Lemon Restaurant" />
        <Navigation links={siteLinks} direction="row" />
      </div>
    </header>
  );
}
