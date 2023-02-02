import ButtonCTA from "../ButtonCTA/ButtonCTA";
import classes from "./Hero.module.scss";
import RestFood from "../../assets/images/restauranfood.jpg";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.inner}>
        <h1 className={classes.title}>Little Lemon</h1>
        <h2 className={classes.subtitle}> Chicago</h2>
        <p className={classes.description}>
          We are family owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist.
        </p>
        <ButtonCTA text="Reserve a table" />

        <div className={classes.image}>
          <img src={RestFood} alt="restourant food" />
        </div>
      </div>
    </div>
  );
}
