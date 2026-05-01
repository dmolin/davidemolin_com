// this will be moved to the DB and fetched via Apollo client once the UI is done.
import techs from "@/shared/fixtures/techs";
import SocialIcons from "@/client/home/SocialIcons";

const AboutMe = (props) => {
  const _renderSection = (title, entries) => {
    return (
      <div>
        <h3 className="section-paragraph pt-4">{title}</h3>
        <ul className="flex flex-row gap-2 flex-wrap">
          {entries.map((e, idx) => (
            <li
              key={idx}
              className="bg-gray-300 text-sm rounded py-1 px-2 font-normal"
            >
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="bg-gray-100 py-4">
      <h2 className="section-title mt-0">About Me</h2>
      <div className="page-container">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:flex-[1] flex flex-col items-center text-center">
            <a
              href="//linkedin.com/in/davidemolin"
              target="_blank"
              aria-label="My profile picture"
            >
              <img
                className="rounded-full max-w-[60%] md:w-full mx-auto"
                title="My profile picture"
                src="/img/dmolin-headshot.jpeg"
                alt="My profile picture"
              />
            </a>
            <p className="testimonial-data">
              <a
                className="link"
                target="_blank"
                href="https://www.linkedin.com/in/davidemolin"
              >
                LinkedIn profile
              </a>
            </p>
          </div>

          <div className="about-me-content grow md:flex-[3] px-4">
            <p className="my-4">
              I’m a Principal Software Engineer and Full-Stack Developer
              specialising in TypeScript and modern web technologies.
            </p>
            <p className="my-4">
              I’ve been building software professionally since 1995, starting
              with C and C++, moving into Java web development in the early
              2000s, and transitioning to full-stack and dynamic languages in
              2004.
            </p>
            <p className="my-4">
              Currently, I work remotely at
              <a
                className="link mx-1"
                href="https://hubrosimulations.com/"
                target="_blank"
              >
                Hubro Simulations
              </a>
              (now part of Sage Publishing), where I design and build scalable
              products, solve complex problems, and continuously explore new
              technologies.
            </p>
            <p className="my-4">
              I’m passionate about crafting great products, finding innovative
              solutions, and using technology to
              <a
                className="link mx-1"
                href="https://www.youtube.com/watch?v=B8C5sjjhsso"
                target="_blank"
              >
                make the world a better place
              </a>
              😁 through the use of technology. I'm always up for learning new
              stuff.
            </p>
            {_renderSection(
              "Technologies I'm currently working with",
              techs.filter((t) => t.current),
            )}
            {_renderSection(
              "Technologies I'm currently playing with /learning",
              techs.filter((t) => t.moe === 0),
            )}
            {_renderSection(
              "Other technologies I've been previously working with",
              techs.filter((t) => !t.current && t.moe),
            )}
          </div>
        </div>
        <div className={`page-container my-6 mt-8`}>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
