import React from "react";
import LeftArrow from "../../../assets/images/ArrowLeft.png";
import RightArrow from "../../../assets/images/ArrowRight.png";

interface NavigationProps {
  slidePrev: () => void;
  slideNext: () => void;
}

export default function Navigation({ slideNext, slidePrev }: NavigationProps) {
  return (
    <div className="flex">
      <div
        onClick={() => slidePrev()}
        className="w-9 h-9 cursor-pointer rounded-full hover:scale-75 transition-all flex justify-center items-center bg-white border mr-3"
      >
        <img
          draggable="false"
          src={LeftArrow}
          alt="left-arrow"
          placeholder="blur"
        />
      </div>
      <div
        onClick={() => slideNext()}
        className="w-9 h-9 rounded-full cursor-pointer  hover:scale-75 transition-all  flex justify-center items-center bg-[#2A9EF4]"
      >
        <img
          draggable="false"
          src={RightArrow}
          alt="right-arrow"
          placeholder="blur"
        />
      </div>
    </div>
  );
}