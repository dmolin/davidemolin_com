import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

// this will be moved to the DB and fetched via Apollo client once the UI is done.
// const projects = [{"_id":"gB7PybJ7fvbqkFFG5","imageBg":"jumbotron/payfriendz-bg.jpg","imageFg":"jumbotron/payfriendz-fg.png","description":"","fgSize":"auto 50%","bgColor":"#000","priority":999,"createdAt":"2021-05-15T06:16:30.188Z","createdBy":"0"},{"_id":"2ztP2rYHn9enXaBFK","imageBg":"jumbotron/bodog-bg.jpg","imageFg":"jumbotron/bodog-fg.png","description":"","fgSize":"auto 90%","bgColor":"#3b3b3b","priority":991,"createdAt":"2021-05-15T06:16:30.202Z","createdBy":"0"},{"_id":"vEQtmpCnbS5Z9bTdm","imageBg":"jumbotron/x-plane-bg.jpg","imageFg":"jumbotron/x-plane-fg.png","fgSize":"auto 70%","bgColor":"#0f2a45","priority":990,"createdAt":"2021-05-15T06:16:30.204Z","createdBy":"0"},{"_id":"cCgLtaEm39HjYzQgs","imageBg":"jumbotron/udemy-bg.jpg","imageFg":"jumbotron/udemy-fg.png","description":"","fgSize":"auto 70%","bgColor":"#fff","priority":980,"createdAt":"2021-05-15T06:16:30.206Z","createdBy":"0"},{"_id":"o5As8fSrPFjArYg6N","imageBg":"jumbotron/policyexpert-bg.jpg","imageFg":"jumbotron/policyexpert-fg.png","description":"","fgSize":"auto 70%","bgColor":"#f9f9f9","priority":979,"createdAt":"2021-05-15T06:16:30.215Z","createdBy":"0"},{"_id":"9DMcExz92HwePrh99","imageBg":"jumbotron/giadacoppi-bg.jpg","imageFg":"jumbotron/giadacoppi-fg.png","description":"","fgSize":"auto 70%","bgColor":"#e5e5e5","priority":978,"createdAt":"2021-05-15T06:16:30.216Z","createdBy":"0"},{"_id":"fLjdg4f4jBDz6mteQ","imageBg":"jumbotron/zeebox-bg.jpg","imageFg":"jumbotron/zeebox-fg.png","description":"","fgSize":"auto 70%","bgColor":"#6f0000","priority":970,"createdAt":"2021-05-15T06:16:30.217Z","createdBy":"0"},{"_id":"zSM6jo4PSRatz4wXo","imageBg":"jumbotron/mindcandy-bg.jpg","imageFg":"jumbotron/mindcandy-fg.png","description":"","fgSize":"auto 70%","bgColor":"#fff","priority":960,"createdAt":"2021-05-15T06:16:30.223Z","createdBy":"0"}];
const projects = [
  { _id: "1", bgColor: "#e5e5e5", bgImage: "economist-bg.jpg", fgImage: "economist-fg.png", priority: 1000 },
  { _id: "2", bgColor: "#ffffff", bgImage: "hubro-bg.jpg", fgImage: "hubro-fg.png", priority: 1000 },
  { _id: "3", bgColor: "#000", bgImage: "payfriendz-bg.jpg", fgImage: "payfriendz-fg.png", priority: 1000 },
  { _id: "5", bgColor: "#0f2a45", bgImage: "x-plane-bg.jpg", fgImage: "x-plane-fg.png",  priority: 1000 },
];

const makeImageUrl = img => `url(/img/jumbotron/${img})`;

const Jumbotron = (props) => {
  const { className = "" } = props;

  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const _handleSlideChange = ({ activeIndex }) => {
    setCurrentSlideIdx(activeIndex);
  };

  const slide = projects[currentSlideIdx];
  const wrapperStyle = slide ? {
    backgroundColor: slide.bgColor
  } : {};

  return (
    <section className={`${className} jumbotron-wrapper`} style={wrapperStyle}>
      <div className="h-full text-center jumbotron">
        <Swiper
          className="h-full"
          onSlideChange={_handleSlideChange}
        >
          {projects.map(p => {
            const fgSize = p.fgSize || "auto 100%";
            return (
              <SwiperSlide key={p._id}>
                <article className="h-full bg-cover bg-top"  style={{ backgroundImage: makeImageUrl(p.bgImage) }}>
                  <div
                    className="h-full bg-cover bg-bottom bg-fix jumbotron-image"
                    style={{ background: `${makeImageUrl(p.fgImage)} bottom center no-repeat`, backgroundSize: fgSize }}
                  />
                </article>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <style jsx>{`
        .jumbotron-wrapper {
          height: 50vh;
          max-height: 1000px
        }
        .jumbotron {
          max-width: 2200px;
          margin: 0 auto;
        }
        .jumbotron-image {
        }
      `}</style>
    </section>
  )
};

export default Jumbotron;
