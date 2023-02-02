import classes from "./ButtonCTA.module.scss";

export default function ButtonCTA({ text }: { text: string }) {
  return <button className={classes.button}>{text}</button>;
}
