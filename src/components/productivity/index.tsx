import React from "react";
import ProductivityImage from "../../assets/images/productivity.png";

export default function Productivity() {
  return (
    <div className="flex px-24 mx-auto flex-col items-center mt-20 mb-20">
      <h3 className="text-[#3E3E3E] lg:text-3xl md:text-xl font-bold lg:mb-10 md:mb-5">
        Employee Productivity and Well-Being
      </h3>
      <span className="text-[#3E3E3E] lg:text-xl lg:max-w-lg text-center">
        Offering wellness support to employees positively influences their
        productivity and boosts worker morale.
      </span>
      <img src={ProductivityImage} className="lg:w-10/12 md:w-full md:scale-125 mt-10" alt="productivity" draggable={false} />
    </div>
  );
}
