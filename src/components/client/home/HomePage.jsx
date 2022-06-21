import Jumbotron from "@/client/Jumbotron";
import AboutMe from "@/client/home/AboutMe";
import Testimonials from "@/client/Testimonials";
import Stats from "@/client/home/Stats";
import ProjectsShowcase from "@/client/ProjectsShowcase";

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
    </>
  );
};

export default HomePage;
