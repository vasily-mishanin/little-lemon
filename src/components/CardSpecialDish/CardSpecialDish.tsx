import ButtonDelivery from "../ButtonDelivery/ButtonDelivery";
import classes from "./CardSpecialDish.module.scss";

interface CardSpecialDishProps {
  imageSrc: string;
  title: string;
  price: string;
  description: string;
}

export default function CardSpecialDish({
  imageSrc,
  title,
  price,
  description,
}: CardSpecialDishProps) {
  return (
    <article className={classes.card}>
      <div className={classes.image}>
        <img src={imageSrc} alt={title} />
      </div>

      <div className={classes.content}>
        <div className={classes.details}>
          <h4 className={classes.title}>{title}</h4>
          <p className={classes.price}>{price}</p>
        </div>
        <p className={classes.description}>{description}</p>
      </div>
      <div className={classes.cta}>
        <ButtonDelivery text="Order a delivery" />
      </div>
    </article>
  );
}
