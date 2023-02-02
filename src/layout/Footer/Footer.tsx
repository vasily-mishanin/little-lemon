import { useLocation } from "react-router";
import NavigationFooter from "../../components/NavigationFooter/NavigationFooter";
import classes from "./Footer.module.scss";
import LogoFooter from "../../assets/images/logo-footer.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";

const linksFooter = [
  { path: "/", text: "Home" },
  { path: "#about", text: "About" },
  { path: "menu", text: "Menu" },
  { path: "reservation", text: "Reservations" },
  { path: "order", text: "Order Online" },
  { path: "login", text: "Login" },
];

export default function Footer() {
  const { pathname } = useLocation();
  console.log("Footer");

  return pathname === "/" ? (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <img src={LogoFooter} alt="little lemon logo" />
        </div>

        <NavigationFooter links={linksFooter} />

        <div className={classes.info}>
          <div className={classes.socials}>
            <a href="https://www.facebook.com/thelittlelemonkitchen/">
              <img src={FacebookIcon} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/littlelemongtx/?hl=en">
              <img src={InstagramIcon} alt="instagram" />
            </a>
            <a href="https://web.telegram.org">
              <img src={TelegramIcon} alt="telegram" />
            </a>
          </div>

          <div className={classes.contacts}>
            <address>Address: Michigan Ave Suite L3-03, Chicago, IL </address>
            <p>
              <a href="tel:+13129515923">Phone number: +13129515923</a>
            </p>
            <p>
              <a href="mailto:littlelemon@icloud.com">
                Email: littlelemon@icloud.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  ) : null;
}
