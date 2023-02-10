import { menuDishes } from "../../api/bookings";
import ListSpecials from "../../components/ListSpecials/ListSpecials";
import classes from "./Menu.module.scss";

export default function Menu() {
  return (
    <section className={classes.menu}>
      <h1 className={classes.title}>Menu</h1>
      <div className={classes.content}>
        <ListSpecials dishes={menuDishes} />
      </div>
    </section>
  );
}
