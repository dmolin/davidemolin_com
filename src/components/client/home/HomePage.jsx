import Jumbotron from "@/client/Jumbotron";
import AboutMe from "@/client/home/AboutMe";
import Testimonials from "@/client/Testimonials";
import Stats from "@/client/home/Stats";

const HomePage = props => {
  return (
    <>
      <section>
        <Jumbotron />
      </section>
      <AboutMe />
      <Testimonials />
      <Stats />
    </>
  );
};

export default HomePage;
