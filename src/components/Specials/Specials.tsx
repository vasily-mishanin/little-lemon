import ButtonCTA from "../ButtonCTA/ButtonCTA";
import classes from "./Specials.module.scss";
import ListSpecials from "../ListSpecials/ListSpecials";
import { specials } from "../../api/bookings";

export default function Specials() {
  return (
    <section className={classes.specials}>
      <div className={classes.inner}>
        <header className={classes.header}>
          <h2 className={classes.title}>This week specials! </h2>
          <ButtonCTA text="Online Menu" link="/menu" />
        </header>

        <ListSpecials dishes={specials} />
      </div>
    </section>
  );
}
