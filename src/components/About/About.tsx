import classes from "./About.module.scss";
import ChefImg from "../../assets/images/chef.png";
import ChefAndCoImg from "../../assets/images/chef-and-co.png";

export default function About() {
  return (
    <section className={classes.about}>
      <div className={classes.inner}>
        <div className={classes.text}>
          <h1 className={classes.title}>Little Lemon</h1>
          <h2 className={classes.subtitle}> Chicago</h2>
          <p className={classes.description}>
            At Restaurant Little Lemon, we take comfort to heart. That’s why we
            offer traditional Mediterranean dishes that are familiar and make
            our customers feel right at home. <br />
            But we also believe in quality and everything we prepare is made
            with the freshest ingredients offered daily. And we like to add our
            own unique style and flair that no one can find anywhere else. This
            blending of the new and the traditional is what makes us stand out.
          </p>
        </div>
        <div className={classes.images}>
          <img
            className={classes.image1}
            src={ChefImg}
            alt="Chef is salting the dish"
          />
          <img
            className={classes.image2}
            src={ChefAndCoImg}
            alt="Chiefs are laughing"
          />
        </div>
      </div>
    </section>
  );
}
