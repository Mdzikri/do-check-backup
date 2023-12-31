import { first, toNumber } from "lodash";
import React from "react";
import CountUp from "react-countup";
import RenderIfVisible from "react-render-if-visible";


import useData from "../../hooks/useData";



export default function WhyUs() {
  const { data } = useData()
  return (
    <div className="m-auto flex items-center justify-center px-24 mt-36 mb-36 flex-col">
      <h3 className="font-semibold lg:text-4xl md:text-3xl 2xl:text-4xl mb-16">
        Why does your business need Wool?
      </h3>
      <RenderIfVisible rootElementClass="grid lg:grid-cols-3 md:grid-cols-2 w-4/5 gap-4">
        {data?.analyticsBusiness?.map(({ description, title, value }, idx) => (
          <div className="flex flex-col items-center justify-center" key={idx}>
            <CountUp
              end={toNumber(first(title.split("%")))}
              duration={2.5}
              className="text-[#2A9EF4] font-bold text-4xl mb-3"
              suffix="%"
            ></CountUp>
            <p className="font-semibold mt-3 mb-3 text-[#3E3E3E] text-lg 2xl:text-xl">
              {value}
            </p>
            <span className="w-3/4 text-center text-lg text-[#3E3E3E] opacity-70 2xl:text-xl">
              {description}
            </span>
          </div>
        ))}
      </RenderIfVisible>
    </div>
  );
}
