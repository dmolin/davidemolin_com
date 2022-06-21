import Jumbotron from "@/client/Jumbotron";
import AboutMe from "@/client/home/AboutMe";
import Testimonials from "@/client/Testimonials";
import Stats from "@/client/home/Stats";
import ProjectsShowcase from "@/client/ProjectsShowcase";
import Values from "@/client/home/Values";

const HomePage = props => {
  return (
    <>
      <section>
        <Jumbotron />
      </section>
      <AboutMe />
      <Testimonials />
      <Stats />
      <ProjectsShowcase />
      <Values />
    </>
  );
};

export default HomePage;
