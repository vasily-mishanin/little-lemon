import { IPerson } from "../../model/types";
import RatingBadge from "../RatingBadge/RatingBadge";
import classes from "./CardTestimonial.module.scss";

export default function CardTestimonial({
  id,
  rating,
  avatar,
  name,
  nickname,
  review,
}: IPerson) {
  return (
    <article className={classes.card}>
      <span className={classes.rating}>
        <RatingBadge number={rating} />
      </span>
      <div className={classes.avatar}>
        <img src={avatar} alt={name} />
      </div>

      <div className={classes.names}>
        <p className={classes.name}>{name}</p>
        <p className={classes.nickname}>{nickname}</p>
      </div>

      <p className={classes.review}>{review}</p>
    </article>
  );
}
