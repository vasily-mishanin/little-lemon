import { IDish } from "../../model/types";
import CardSpecialDish from "../CardSpecialDish/CardSpecialDish";
import classes from "./ListSpecials.module.scss";

type SoecialDishesListProps = {
  dishes: IDish[];
};

export default function ListSpecials({ dishes }: SoecialDishesListProps) {
  return (
    <ul className={classes.list}>
      {dishes.map((dish) => (
        <li className={classes.item} key={dish.id}>
          <CardSpecialDish
            imageSrc={dish.image}
            title={dish.title}
            price={dish.price}
            description={dish.description}
          />
        </li>
      ))}
    </ul>
  );
}
