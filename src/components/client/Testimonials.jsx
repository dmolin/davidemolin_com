import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import testimonials from "@/shared/fixtures/testimonials";

const Testimonials = props => {
  return (
    <section className="testimonials section" {...props}>
      <div className="container md:max-w-[80%] lg:max-w-[70%]">
        <header className="section-header">
          <h1 className="section-title">Testimonials</h1>
        </header>

        <Swiper
          autoHeight
          modules={[Navigation, Pagination, Scrollbar]}
          className="neutral-pagination mb-2"
          pagination={true}
          navigation
          loop
        >
          {testimonials.map((t, idx) => {
            return (
              <SwiperSlide key={idx}>
                <header className="mx-auto text-center mb-4">
                  <div className="">
                    <img className="rounded-full w-36 mx-auto border border-gray-300 rounded-full" src={"/img/profiles/" + t.avatar} />
                  </div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm">{t.title}</p>
                </header>
                <p className="px-16 italic text-slate-600 relative">
                  <FaQuoteLeft className="absolute top-0 left-9 text-slate-500 text-sm" />
                  {t.recommendation}
                  <FaQuoteRight className="absolute bottom-0 right-9 text-slate-500 text-sm"/>
                </p>
                <footer className="text-center text-sm text-slate-600 mt-4 mb-10">
                  <span className="">{t.relationship}</span>
                </footer>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
