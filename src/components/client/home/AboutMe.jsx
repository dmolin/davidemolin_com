// this will be moved to the DB and fetched via Apollo client once the UI is done.
import techs from "@/shared/fixtures/techs";
import SocialIcons from "@/client/home/SocialIcons";

const AboutMe = props => {
  const _renderSection = (title, entries) => {
    return (
      <div>
        <h3 className="section-paragraph">{title}</h3>
        <ul className="flex flex-row gap-2 flex-wrap">
          {entries.map((e, idx) => (
            <li key={idx} className="bg-gray-300 text-sm rounded py-1 px-2 font-normal">{e.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-4">
      <h2 className="section-title mt-0">About Me</h2>
      <div className="page-container">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:flex-[1] flex flex-col items-center text-center">
            <a href="//linkedin.com/in/davidemolin" target="_blank" aria-label="Davide Molin profile picture">
              <img className="rounded-full max-w-[60%] md:w-full mx-auto" title="dmolin-quarter" src="/img/me250.jpg" alt="Davide Molin profile picture" />
            </a>
            <p className="testimonial-data">
              <a className="link" target="_blank" href="https://www.linkedin.com/in/davidemolin">LinkedIn profile</a>
            </p>
          </div>

          <div className="about-me-content grow md:flex-[3] px-4">
            <p className="my-4">I’m a Front End Developer (with a mix of Fullstack too), with a passion for Javascript programming, Front End Development, new technologies and solving problems one keystroke at a time.</p>
            <p className="my-4">I've been writing code professionally since 1995, starting with C and C++, then Java Web development (in 2001), eventually falling in love with Front End development and dynamic languages (since 2004).</p>
            <p className="my-4">Nowaday I focus on Front-End and FullStack Development. I love technology, frameworks, crafting great applications and making the world a better place through the use of technology. I'm always up for learning new stuff.</p>

            {_renderSection("Technologies I'm currently working with", techs.filter(t => t.current))}
            {_renderSection("Other technologies I've been working with", techs.filter(t => !t.current && t.moe))}
            {_renderSection("Technologies in my TODO list", techs.filter(t => t.moe === 0))}
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
