import React from "react";

import Union from "../../assets/images/union-bottom.png";
import Unmotivated from "../../assets/images/unmotivated.png";
import { Else, If, Then } from "react-if";

const staticItem = [
  {
    id: 0,
    title: "Minim prestasi di kantor",
    value:
      "Target ga tercapai, dimarahin atasan, dan udah gitu ga dapet bonus dari kantor, hadeeuh",
    imgSrc: Unmotivated,
  },
  {
    id: 1,
    title: "Kurang termotivasi",
    value:
      "Merasa kerjaan kantor gitu-gitu aja, ga ada perubahan atau keinginan yang dicapai",
    imgSrc: Unmotivated,
  },
];

export default function Feature() {
  return (
    <div className="relative">
      <div className="absolute top-96 select-none">
        <img
          alt="union"
          src={Union}
          className="rotate-180 scale-110 w-screen h-fit"
        />
      </div>
      <div className="flex relative items-center pt-10 justify-center">
        <div className="w-100 z-50 w-2/4">
          <h4 className="text-center font-bold text-[38px] md:leading-[55px]">
            Sebelumnya, apakah kamu sedang merasa seperti ini?
          </h4>
        </div>

        <div className="absolute top-0 bg-[#d4ecfd] w-screen md:h-[46.3vh]"></div>
      </div>
      <div className="flex w-8/12 m-auto flex-col items-center justify-center">
        {staticItem.map((item, idx) => (
          <If condition={idx % 2 == 0}>
            <Then>
              <div className={`flex self-start items-center`} key={idx}>
                <img className="scale-75" alt={item.title} src={item.imgSrc} />
                <div className="description-wrapper w-2/6">
                  <h4 className="font-[#1D1D1D] text-xl font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm">{item.value}</p>
                </div>
              </div>
            </Then>
            <Else>
              <div className={`flex items-center md:mb-32 justify-end`} key={idx}>
                <div className="description-wrapper w-2/6 text-right">
                  <h4 className="font-[#1D1D1D] text-xl font-bold">
                    {item.title}
                  </h4>
                  <p className="text-sm mb-2">{item.value}</p>
                </div>
                <img className="scale-75" alt={item.title} src={item.imgSrc} />
              </div>
            </Else>
          </If>
        ))}
      </div>
    </div>
  );
}
