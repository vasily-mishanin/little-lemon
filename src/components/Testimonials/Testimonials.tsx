import { IPerson } from "../../model/types";
import classes from "./Testimonials.module.scss";
import CardTestimonial from "../CardTestimonial/CardTestimonial";
import Carousel from "../Carousel/Carousel";

import Sara from "../../assets/images/sara lopez 1.png";
import Alex from "../../assets/images/alex 1.png";
import Gulia from "../../assets/images/gulia 1.png";
import James from "../../assets/images/james.jpeg";
import Margo from "../../assets/images/margo.jpeg";
import Billy from "../../assets/images/billy.jpeg";

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
  {
    id: "James1991",
    rating: 4,
    avatar: James,
    name: "James Hetfield",
    nickname: "James1991",
    review:
      "“Delicious food, great service, and a cozy atmosphere. I highly recommend Little Lemon!”",
  },
  {
    id: "Billy2002",
    rating: 5,
    avatar: Billy,
    name: "BillyAlish",
    nickname: "Billy2002",
    review:
      "“Transported to culinary delight. Friendly staff and expertly prepared food. Can't wait to go back!”",
  },
  {
    id: "margo1212",
    rating: 3,
    avatar: Margo,
    name: "Margaritta",
    nickname: "margo1212",
    review: "“I just don't like their owner!”",
  },
];

export default function Testimonials() {
  //style={{ transform: "translateX(100px)" }}

  const testimonialsElements = testimonials.map((testimonial) => (
    <CardTestimonial
      key={testimonial.id}
      id={testimonial.id}
      rating={testimonial.rating}
      avatar={testimonial.avatar}
      name={testimonial.name}
      nickname={testimonial.nickname}
      review={testimonial.review}
    />
  ));

  return (
    <section className={classes.testimonials}>
      <div className={classes.inner}>
        <Carousel cardWidth={230} gap={50}>
          {testimonialsElements}
        </Carousel>
      </div>
    </section>
  );
}

{
  /* <img src="https://via.placeholder.com/230x230" alt="placeholder" />
          <img src="https://via.placeholder.com/230x230" alt="placeholder" />
          <img src="https://via.placeholder.com/230x230" alt="placeholder" /> */
}
