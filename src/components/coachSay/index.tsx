import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Coach from "../../assets/images/coach.jpg";
import Dancing from "../../assets/images/dancing.png";

import "swiper/css";
import Navigation from "./navigation";

export default function CoachSay() {
  const swiperRef = useRef<any>();

  return (
    <div className="coach-slider rounded-2xl z-10 w-4/6 mb-28 mt-10 relative block m-auto bg-white shadow-2xl p-10">
      <h3 className="font-medium md:text-[32px] lg:text-[40px] tracking-[-0.013em] md:leading-[38px] lg:leading-[46px] md:w-1/2 md:mb-8 lg:mb-6">
        What our beloved Coach say
      </h3>
      <Swiper
        className="coach-slider__wrp swiper-wrapper"
        spaceBetween={30}
        effect="fade"
        loop
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {new Array(10).fill(0).map((item, idx) => (
          <SwiperSlide key={idx} className="coach-slider__wrp swiper-wrapper">
            <div className="grid md:gap-4 md:grid-cols-1 lg:grid-cols-2">
              <div className="img-coach md:flex md:items-center md:justify-center">
                <img
                  draggable="false"
                  className="lg:w-fit md:w-2/4"
                  src={Coach}
                  alt="coach"
                />
              </div>
              <div className="wrapper">
                <h4 className="text-[#3E3E3E] md:text-[24px] lg:text-[28px] mb-4">
                  “Professional and high skill employee”
                </h4>
                <p className="text-[#3E3E3E] md:text-sm lg:text-[16px]">
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
      <h3 className="font-normal mt-10 md:text-[22px] lg:text-[30px] tracking-[-0.013em] md:leading-[32px]  lg:leading-[40px] md:w-3/5 lg:w-1/2 mb-6">
        We realize your dream building anytime
      </h3>
      <img
        draggable="false"
        src={Dancing}
        alt="dancing"
        className="w-4/12 absolute md:-bottom-1 md:-right-24 lg:-right-36 lg:-bottom-2"
      />
    </div>
  );
}
