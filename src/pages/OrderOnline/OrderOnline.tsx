import { onlineDishes } from "../../api/bookings";
import ListSpecials from "../../components/ListSpecials/ListSpecials";
import classes from "./OrderOnline.module.scss";

export default function MeOrderOnlinenu() {
  return (
    <section className={classes.menu}>
      <h1 className={classes.title}>Online Menu</h1>
      <div className={classes.content}>
        <ListSpecials dishes={onlineDishes} />
      </div>
    </section>
  );
}
