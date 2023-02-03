import { IPerson } from "../../model/types";
import classes from "./Testimonials.module.scss";
import Sara from "../../assets/images/sara lopez 1.png";
import Alex from "../../assets/images/alex 1.png";
import Gulia from "../../assets/images/gulia 1.png";
import CardTestimonial from "../CardTestimonial/CardTestimonial";
import Carousel from "../Carousel/Carousel";

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
  //style={{ transform: "translateX(100px)" }}

  const testimonialsElements = (
    <>
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
    </>
  );

  return (
    <section className={classes.testimonials}>
      <div className={classes.inner}>
        <Carousel>
          {/* <img src="https://via.placeholder.com/230x230" alt="placeholder" />
          <img src="https://via.placeholder.com/230x230" alt="placeholder" />
          <img src="https://via.placeholder.com/230x230" alt="placeholder" /> */}
          {testimonialsElements}
          {testimonialsElements}
        </Carousel>
      </div>
    </section>
  );
}
