import Hero from "../../components/Hero/Hero";
import Specials from "../../components/Specials/Specials";
import Testimonials from "../../components/Testimonials/Testimonials";
import classes from "./Home.module.scss";

export default function Home() {
  return (
    <main className={classes.home}>
      <Hero />
      <Specials />
      <Testimonials />
    </main>
  );
}
