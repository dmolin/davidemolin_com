import _ from "lodash";

import { Swiper, SwiperSlide, Navigation, Pagination, Scrollbar } from "@/components/client/Swiper";

import projects from "@/shared/fixtures/projects";
import { useSwiper } from "swiper/react";

const ProjectSlide = props => {
  const { image, title, description, githubUrl, liveUrl, prodUrl, liveLabel, videoUrl, itunesUrl, styles } = props

  let githubLinkOrNothing
  let liveLinkOrNothing
  let prodLinkOrNothing
  let videoLinkOrNothing
  let itunesLinkOrNothing
  let imageTag

  const _onImageLoaded = () => {
    if (_.isFunction(onImageLoaded)) {
      onImageLoaded();
    }
  }

  if(githubUrl) {
    githubLinkOrNothing = <a className="button-success" target="_blank" href={githubUrl}>View on GitHub <i className="fa fa-github"></i></a>
  }
  if(liveUrl) {
    liveLinkOrNothing = <a className="button-primary" target="_blank" href={liveUrl}>{liveLabel || 'Live Demo!'}</a>
  }
  if(prodUrl) {
    prodLinkOrNothing = <a className="button-primary" target="_blank" href={prodUrl}>Visit</a>
  }
  if(videoUrl) {
    videoLinkOrNothing = <a className="button-primary" target="_blank" href={videoUrl}>Video!</a>
  }
  if(itunesUrl) {
    itunesLinkOrNothing = <a className="pure-button pure-button-primary" target="_blank" href={itunesUrl}>View on iTunes <i className="fa fa-apple"></i></a>
  }

  return (
    <div className="flex flex-col lg:flex-row px-12 pb-8">
      <div className="flex-[2] flex align-bottom">
        <img src={`/img/${image}`} />
      </div>
      <div className="flex-[1] pt-8 pl-4">
        <header>
          <h2 className="section-header">{title}</h2>
        </header>
        {description.map((d,idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: d }} className="pb-4"/>
        ))}
        <div className="flex flex-row gap-4 flex-wrap">
          {githubLinkOrNothing}
          {liveLinkOrNothing}
          {prodLinkOrNothing}
          {videoLinkOrNothing}
          {itunesLinkOrNothing}
        </div>
      </div>
    </div>

  );
}

const ProjectsShowcase = props => {
  const swiper = useSwiper();

  return (
    <section className="section">
      <div className="container md:max-w-[90%] lg:max-w-[1280px]">
        <header className="section-header">
          <h1 className="section-title">Some of the projects I worked on</h1>
        </header>

        <Swiper
          autoHeight
          modules={[Navigation, Pagination, Scrollbar]}
          className="neutral-pagination mb-2"
          pagination={true}
          navigation
          loop
        >
          {projects.map((p, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ProjectSlide {...p} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
