import classes from "./ButtonDelivery.module.scss";
import DeliveryIcon from "../../assets/icons/icon-delivery.png";

export default function ButtonDelivery({ text }: { text: string }) {
  return (
    <button className={classes.button}>
      <span>{text}</span>
      <img src={DeliveryIcon} alt={text} />
    </button>
  );
}
