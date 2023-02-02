import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import classes from "./Header.module.scss";
import LogoImg from "../../assets/images/Logo.svg";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Logo imageSrc={LogoImg} alt="Little Lemon Restaurant" />
        <Navigation />
      </div>
    </header>
  );
}
