import { useState } from "react";
import { Swiper, SwiperSlide, Navigation, Pagination, Scrollbar } from "@/components/client/Swiper";

// this will be moved to the DB and fetched via Apollo client once the UI is done.
import projects from "@/shared/fixtures/heroslides";

const makeImageUrl = img => `url(/img/jumbotron/${img})`;

const Jumbotron = (props) => {
  const { className = "" } = props;

  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const _handleSlideChange = ({ activeIndex }) => {
    // this is to get around a bug in Swiper
    setCurrentSlideIdx(activeIndex - 1);
  };

  const slide = projects[currentSlideIdx];
  const wrapperStyle = slide ? {
    backgroundColor: slide.bgColor
  } : {};

  return (
    <div className={`${className} jumbotron-wrapper h-[60vh] max-h-[1000px]`} style={wrapperStyle}>
      <div className="h-full h-100p text-center jumbotron max-w-[2200px] mx-auto">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar]}
          className="h-full"
          //onSlideChange={_handleSlideChange}
          onActiveIndexChange={_handleSlideChange}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          {projects.map(p => {
            const fgSize = p.fgSize || "auto 100%";
            return (
              <SwiperSlide key={p._id}>
                <div className="h-full bg-cover bg-top"  style={{ backgroundImage: makeImageUrl(p.bgImage) }}>
                  <div
                    className="h-full bg-cover bg-bottom bg-fix jumbotron-image"
                    style={{ background: `${makeImageUrl(p.fgImage)} bottom center no-repeat`, backgroundSize: fgSize }}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
};

export default Jumbotron;
