import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";

export default function Logo({
  imageSrc,
  alt,
}: {
  imageSrc: string;
  alt: string;
}) {
  return (
    <Link to="/" className={classes.logo}>
      <img className={classes.image} src={imageSrc} alt={alt} />
    </Link>
  );
}
