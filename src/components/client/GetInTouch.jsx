import SocialIcons from "@/client/home/SocialIcons";

const GetInTouch = (props) => (
  <section className="" {...props}>
    <div className="page-container-medium px-4">
      <header className="section-header">
        <h2 className="section-title">Get in touch</h2>
      </header>
      <div className="section-content">
        <p>
          You can always reach me at{" "}
          <a className="link">davide-at-davidemolin.com</a> (substitute -at-
          with @) or reach out to me through my social links!
        </p>

        <div className="pt-4 pb-8">
          <SocialIcons />
        </div>
      </div>
    </div>
  </section>
);

export default GetInTouch;
