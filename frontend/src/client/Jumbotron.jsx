import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// this will be moved to the DB and fetched via Apollo client once the UI is done.
import projects from "@/shared/fixtures/projects";

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
          modules={[Navigation, Pagination, Scrollbar]}
          className="h-full"
          onSlideChange={_handleSlideChange}
          pagination={true}
          navigation
          loop
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
      `}</style>
    </section>
  )
};

export default Jumbotron;
