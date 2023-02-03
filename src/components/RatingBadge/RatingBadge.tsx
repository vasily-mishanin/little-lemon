import classes from "./RatingBadge.module.scss";
import Star from "../../assets/icons/star.svg";

const starImage = <img src={Star} alt="star" />;

export default function RatingBadge({ number }: { number: number }) {
  return <div className={classes.rating}>{Array(number).fill(starImage)}</div>;
}
