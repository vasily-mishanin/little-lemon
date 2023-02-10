import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";

export default function Logo({
  imageSrc,
  alt,
  width,
}: {
  imageSrc: string;
  alt: string;
  width?: string;
}) {
  return (
    <Link to="/" className={classes.logo} style={{ width }}>
      <img className={classes.image} src={imageSrc} alt={alt} />
    </Link>
  );
}
