import Jumbotron from "@/client/Jumbotron";
import AboutMe from "@/client/home/AboutMe";
import Testimonials from "@/client/Testimonials";
import Stats from "@/client/home/Stats";
import ProjectsShowcase from "@/client/ProjectsShowcase";
import Values from "@/client/home/Values";
import GetInTouch from "@/client/GetInTouch";
import Footer from "@/client/Footer";

const HomePage = props => {
  return (
    <>
      <Jumbotron />
      <AboutMe />
      <Testimonials />
      <Stats />
      <ProjectsShowcase />
      <Values />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default HomePage;
