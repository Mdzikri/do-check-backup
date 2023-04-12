import React from "react";

import ToolkitImage from "../../assets/images/yolo.png";
import ToolkitUnion from "../../assets/images/toolkit-union.png";

export default function Toolkit() {
  return (
    <div className="flex items-center relative justify-around mt-32 mb-48 px-36 m-auto">
      <img
        draggable={false}
        className="absolute lg:-top-28 md:w-11/12 lg:w-4/5 -z-40"
        alt="toolkit-union"
        src={ToolkitUnion}
      />
      <div className="lg:w-2/5 md:6/12">
        <p className="lg:text-2xl md:text-md">
          70% of employees do not seek help due to stigma and access barriers.
          Organisations gather up to $10K additional annual healthcare and
          productivity costs for each employee suffering.
        </p>
        <div className="mt-10 flex items-center lg:justify-start gap-x-6">
          <a
            href="#"
            className="rounded-[100px] bg-[#2A9EF4] lg:pt-5 md:pt-3 lg:pb-5 md:pb-3 lg:pl-16 md:pl-5 lg:pr-16 md:pr-5 lg:text-base md:text-sm text-lg text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A9EF4]"
          >
            Check our Toolkit
          </a>
        </div>
      </div>
      <img
        draggable={false}
        src={ToolkitImage}
        className="lg:w-2/5 md:w-11/12"
        alt="toolkit"
      />
    </div>
  );
}
