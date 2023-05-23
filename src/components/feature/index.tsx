import React from "react";
import { Else, If, Then } from "react-if";

import Union from "../../assets/images/union-bottom.png";
import Unmotivated from "../../assets/images/unmotivated.png";
import SadBoy from "../../assets/images/sadboy.png";
import useData from "../../hooks/useData";

const staticImage = [Unmotivated, SadBoy]

export default function Feature() {
  const { data } = useData()


  const featureItem = data?.featureItem.map((item, idx) => ({
    ...item,
    imgSrc: staticImage[idx]
  }))

  return (
    <div className="relative overflow-hidden">
      <div className="absolute md:top-64 lg:top-24 select-none">
        <img
          alt="union"
          src={Union}
          className="rotate-180 scale-105 w-screen"
        />
      </div>
      <div className="flex relative items-center pt-10 justify-center">
        <div className="w-100 z-50 w-2/4">
          <h4 className="text-center font-bold md:text-[34px] lg:text-[38px] md:mb-10 leading-[55px]">
            Sebelumnya, apakah kamu sedang merasa seperti ini?
          </h4>
        </div>

        <div className="absolute top-0 bg-[#d4ecfd] w-screen md:h-[23vh] lg:h-[46.3vh]"></div>
      </div>
      <div className="flex w-8/12 m-auto flex-col items-center justify-center">
        {featureItem?.map((item, idx) => (
          <If condition={idx % 2 == 0}>
            <Then>
              <div className={`flex self-start z-50 items-center`} key={idx}>
                <img
                  draggable="false"
                  className="md:w-2/4 lg:scale-75"
                  alt={item.title}
                  src={item.imgSrc}
                />
                <div className="description-wrapper w-2/6">
                  <h4 className="font-[#1D1D1D] text-xl font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm">{item.value}</p>
                </div>
              </div>
            </Then>
            <Else>
              <div
                className={`flex self-start flex-row-reverse z-50 md:-mt-10 lg:-mt-36 items-center`}
                key={idx}
              >
                <img
                  draggable="false"
                  className="md:w-2/4 lg:scale-75"
                  alt={item.title}
                  src={item.imgSrc}
                />
                <div className="description-wrapper text-right w-2/6">
                  <h4 className="font-[#1D1D1D] text-xl font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm">{item.value}</p>
                </div>
              </div>
            </Else>
          </If>
        ))}
      </div>
    </div>
  );
}
