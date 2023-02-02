import { IPerson } from "../../model/types";
import classes from "./Testimonials.module.scss";
import Sara from "../../assets/images/sara lopez 1.png";
import Alex from "../../assets/images/alex 1.png";
import Gulia from "../../assets/images/gulia 1.png";
import CardTestimonial from "../CardTestimonial/CardTestimonial";
import ArrowLeft from "../../assets/icons/Chevron Left.png";
import ArrowRight from "../../assets/icons/Chevron Right.png";

import { Carousel } from "@trendyol-js/react-carousel";

const testimonials: IPerson[] = [
  {
    id: "Sara72",
    rating: 5,
    avatar: Sara,
    name: "Sara Lopez",
    nickname: "Sara72",
    review:
      "“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”",
  },
  {
    id: "88alex",
    rating: 4,
    avatar: Alex,
    name: "alex",
    nickname: "88alex",
    review:
      "“Friendly staff and delicious drinks and food. The baked goods are luxurious.”",
  },
  {
    id: "guli",
    rating: 5,
    avatar: Gulia,
    name: "Gulia Tatty",
    nickname: "Sara72",
    review: "“Delicious Food. I had the New Lemon Dessert and it was great!”",
  },
];

export default function Testimonials() {
  return (
    <section className={classes.testimonials}>
      <span className={classes.arrow}>
        <img src={ArrowLeft} alt="left"></img>
      </span>
      <ul className={classes.list}>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <CardTestimonial
              id={testimonial.id}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
              name={testimonial.name}
              nickname={testimonial.nickname}
              review={testimonial.review}
            />
          </li>
        ))}
      </ul>

      <span className={classes.arrow}>
        <img src={ArrowRight} alt="Right"></img>
      </span>
    </section>
  );
}
