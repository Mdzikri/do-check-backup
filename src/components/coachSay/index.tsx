import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Coach from "../../assets/images/coach.jpg";

import "swiper/css";
import Navigation from "./navigation";

export default function CoachSay() {
  const swiperRef = useRef<any>();

  return (
    <div className="coach-slider w-4/6 mb-20 mt-10 block m-auto bg-white rounded-sm relative shadow-2xl p-10">
      <h3 className="font-medium md:text-[40px] tracking-[-0.013em] leading-[46px] md:w-1/2 mb-6">
        What our beloved Coach say
      </h3>
      <Swiper
        className="coach-slider__wrp swiper-wrapper"
        spaceBetween={30}
        effect="fade"
        loop
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        mousewheel={{
          invert: false,
        }}
        pagination={{
          el: ".blog-slider__pagination",
          clickable: true,
        }}
      >
        {new Array(10).fill(0).map((item, idx) => (
          <SwiperSlide key={idx} className="coach-slider__wrp swiper-wrapper">
            <div className="grid md:gap-4 md:grid-cols-2">
              <div className="img-coach">
                <img src={Coach} alt="coach" />
              </div>
              <div className="wrapper">
                <h4 className="text-[#3E3E3E] md:text-[28px] mb-4">
                  “Professional and high skill employee”
                </h4>
                <p className="text-[#3E3E3E] md:ext-[16px]">
                  Don't over think it big data or let's circle back to that nor
                  hit the ground running can you slack it to me. Pull in ten
                  extra bodies to help roll the tortoise deploy to production
                  wheelhouse, or let's put a pin in that. Killing it innovation
                  is hot right now.
                </p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h5 className="font-bold">John Cenna</h5>
                    <span className="text-sm opacity-75">
                      VP of finance at Changi Airport Group
                    </span>
                  </div>
                  <Navigation
                    slidePrev={() => swiperRef.current.slidePrev()}
                    slideNext={() => swiperRef.current.slideNext()}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className="font-normal mt-10 md:text-[30px] tracking-[-0.013em] leading-[40px] md:w-1/2 mb-6">
        We realize your dream building anytime
      </h3>
    </div>
  );
}
