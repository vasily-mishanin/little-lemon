import { ReactNode } from "react";
import classes from "./Carousel.module.scss";

import ArrowLeft from "../../assets/icons/Chevron Left.png";
import ArrowRight from "../../assets/icons/Chevron Right.png";

export default function Carousel({ children }: { children: ReactNode }) {
  const handleRightClick = () => {
    alert("right");
  };

  const handleLeftClick = () => {
    alert("left");
  };

  return (
    <div className={classes.carousel}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <span className={classes.arrowLeft} onClick={handleLeftClick}>
            <img src={ArrowLeft} alt="left"></img>
          </span>
          <div className={classes.contentWrapper}>
            <div className={classes.content}>{children}</div>
          </div>
          <span className={classes.arrowRight} onClick={handleRightClick}>
            <img src={ArrowRight} alt="Right"></img>
          </span>
        </div>
      </div>
    </div>
  );
}
