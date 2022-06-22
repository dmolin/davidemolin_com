import SocialIcons from "@/client/home/SocialIcons";

const GetInTouch = (props) => (
  <section className="" {...props}>
    <div className="page-container-medium">
      <header className="section-header">
        <h1 className="section-title">Get in touch</h1>
      </header>
      <div className="section-content">
        <p>It would be great to have the opportunity to work with your team! If you think my skillsets can be a good fit for your project, please do get in touch! shoot me an email at <a className="link" href="mailto:davide@davidemolin.com">davide@davidemolin.com</a> or reach out to me through my social links!</p>

        <div className="pt-4 pb-8">
          <SocialIcons />
        </div>
      </div>
    </div>
  </section>
);

export default GetInTouch;
