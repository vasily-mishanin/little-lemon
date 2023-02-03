import { ReactNode, useEffect, useState } from "react";
import classes from "./Carousel.module.scss";

import ArrowLeft from "../../assets/icons/Chevron Left.png";
import ArrowRight from "../../assets/icons/Chevron Right.png";

type TCarouselProps = {
  children: JSX.Element[];
  cardWidth: number;
  gap: number;
};

export default function Carousel({ children, cardWidth, gap }: TCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const handleRightClick = () => {
    if (currentIndex < (length - 1) / 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className={classes.carousel}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <span className={classes.arrowLeft} onClick={handleLeftClick}>
            <img src={ArrowLeft} alt="left"></img>
          </span>
          <div className={classes.contentWrapper}>
            <div
              className={classes.content}
              style={{
                columnGap: `${gap}px`,
                transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
              }}
            >
              {children}
            </div>
          </div>
          <span className={classes.arrowRight} onClick={handleRightClick}>
            <img src={ArrowRight} alt="Right"></img>
          </span>
        </div>
      </div>
    </div>
  );
}
