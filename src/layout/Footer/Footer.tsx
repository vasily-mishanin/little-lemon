import { useLocation } from "react-router";
import classes from "./Footer.module.scss";
import LogoFooter from "../../assets/images/logo-footer.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";
import Navigation from "../../components/Navigation/Navigation";
import { siteLinks } from "../../model/constants";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <img src={LogoFooter} alt="little lemon logo" />
        </div>

        <Navigation
          links={siteLinks}
          direction="column"
          gap="0.3rem"
          color="#edefee"
          weight="500"
          display="block"
          fontSize="20px"
        />

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
            <a href="https://goo.gl/maps/fBzX8uLvbwXE22UL6" target="_blank">
              <address>Address: Michigan Ave Suite L3-03, Chicago, IL </address>
            </a>

            <a href="tel:+13129515923">Phone number: +13129515923</a>

            <a href="mailto:littlelemon@icloud.com">
              Email: littlelemon@icloud.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
