import Jumbotron from "@/client/Jumbotron";
import AboutMe from "@/client/home/AboutMe";

const HomePage = props => {
  return (
    <>
      <section>
        <Jumbotron />
      </section>
      <AboutMe />
    </>
  );
};

export default HomePage;
