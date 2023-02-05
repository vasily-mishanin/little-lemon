import { Link } from "react-router-dom";
import classes from "./ButtonCTA.module.scss";

export default function ButtonCTA({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link className={classes.button} to={link}>
      {text}
    </Link>
  );
}
