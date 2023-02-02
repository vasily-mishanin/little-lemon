import ButtonCTA from "../ButtonCTA/ButtonCTA";
import classes from "./Specials.module.scss";
import GreekSalad from "../../assets/images/greek salad.jpg";
import Bruchetta from "../../assets/images/bruchetta.svg";
import LemonDessert from "../../assets/images/lemon dessert.jpg";
import CardSpecialDish from "../CardSpecialDish/CardSpecialDish";
import ListSpecials from "../ListSpecials/ListSpecials";

const data = [
  {
    id: "4125wefe",
    image: GreekSalad,
    title: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
  {
    id: "iojfmo3r0923ve",
    image: Bruchetta,
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: "klklas020345",
    image: LemonDessert,
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default function Specials() {
  return (
    <section className={classes.specials}>
      <div className={classes.inner}>
        <header className={classes.header}>
          <h2 className={classes.title}>This week specials! </h2>
          <ButtonCTA text="Online Menu" />
        </header>
        <ListSpecials dishes={data} />
      </div>
    </section>
  );
}
