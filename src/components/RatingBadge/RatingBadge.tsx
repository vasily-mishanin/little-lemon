import classes from "./RatingBadge.module.scss";
import Star from "../../assets/icons/star.svg";

const StarImage = () => (
  <span>
    <img src={Star} alt="star" />
  </span>
);

export default function RatingBadge({ number }: { number: number }) {
  const stars = [];
  for (let i = 0; i < number; i++) {
    stars.push(<StarImage key={i + ""} />);
  }

  return <div className={classes.rating}>{stars}</div>;
}
