import React from "react";

import ToolkitImage from "../../assets/images/yolo.png";
import ToolkitUnion from "../../assets/images/toolkit-union.png";

export default function Toolkit() {
  return (
    <div className="flex items-center relative justify-around mt-32 mb-48 px-36 m-auto">
      <img draggable={false} className="absolute lg:-top-28 lg:w-4/5 lg:-z-40" alt="toolkit-union" src={ToolkitUnion} />
      <div className="w-2/5">
        <p className="lg:text-2xl">
          70% of employees do not seek help due to stigma and access barriers.
          Organisations gather up to $10K additional annual healthcare and
          productivity costs for each employee suffering.
        </p>
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <a
            href="#"
            className="rounded-[100px] bg-[#2A9EF4] pt-5 pb-5 pl-16 pr-16 text-lg text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A9EF4]"
          >
            Check our Toolkit
          </a>
        </div>
      </div>
      <img
        draggable={false}
        src={ToolkitImage}
        className="w-2/5"
        alt="toolkit"
      />
    </div>
  );
}
