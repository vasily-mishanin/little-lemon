import { ReactNode, useEffect, useState } from "react";
import classes from "./Carousel.module.scss";

import ArrowLeft from "../../assets/icons/Chevron Left.png";
import ArrowRight from "../../assets/icons/Chevron Right.png";

type TCarouselProps = {
  children: JSX.Element[];
  cardWidth: number;
  gap: number;
  containerWidth: number;
};

export default function Carousel({
  children,
  cardWidth,
  gap,
  containerWidth,
}: TCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const cardsInContaner = () => {
    const fullCardWith = cardWidth + gap;
    const cardsNumberEstimation = Math.ceil(containerWidth / fullCardWith);
    if (containerWidth - (fullCardWith * cardsNumberEstimation - gap) >= 0) {
      return cardsNumberEstimation;
    }
    return cardsNumberEstimation - 1;
  };

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const handleRightClick = () => {
    console.log(cardsInContaner());
    if (currentIndex < length - cardsInContaner()) {
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
            <img
              src={ArrowLeft}
              alt="left"
              style={{ opacity: currentIndex === 0 ? "0.3" : "1" }}
            ></img>
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
            <img
              src={ArrowRight}
              alt="Right"
              style={{
                opacity:
                  currentIndex < length - cardsInContaner() ? "1" : "0.3",
              }}
            ></img>
          </span>
        </div>
      </div>
    </div>
  );
}
