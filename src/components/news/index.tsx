import React, { useCallback, useEffect, useMemo } from "react";
import { Else, If, Then } from "react-if";

import FirstNews from "../../assets/images/first-news.png";
import SecondNews from "../../assets/images/second-news.png";
import ThirdNews from "../../assets/images/third-news.png";

import CutterBottom from "../../assets/images/Vector 711.png";
import CutterUpper from "../../assets/images/Vector 710.png";
import useData from "../../hooks/useData";
import { first } from "lodash";

interface RenderCard {
  idx: number;
  imgSrc: string;
  title: string;
  value: string;
}


const staticImage = [FirstNews, SecondNews, ThirdNews];

export default function News() {
  const { data } = useData()

  const newsItem = useMemo(() => first(data?.newsItem)!.map((item, idx) => ({
    ...item,
    imgSrc: staticImage[idx]
  })), [data])

  useEffect(() => {
    console.log('data?.newsItem', data?.newsItem)
  }, [data?.newsItem])

  const renderCard = useCallback(
    ({ idx, imgSrc, title, value }: RenderCard) => (
      <div
        key={idx}
        className={`mb-10 px-10 py-5 z-50 w-100 md:max-h-[550px] bg-[#F6F6F6] w-full rounded-xl overflow-hidden shadow-sm`}
      >
        <div className="px-6 py-4">
          <div className="font-bold md:text-base 2xl:text-2xl lg:text-xl mb-2 text-[#222222]">
            {title}
          </div>
          <p className="text-gray-700 text-sm 2xl:text-lg">{value}</p>
          <div className="mt-6">
            <img
              draggable="false"
              className="rounded-xl w-full"
              src={imgSrc}
              alt={title}
            />
          </div>
        </div>
      </div>
    ),
    []
  );


  return (
    <div className="news px-32 mt-36 2xl:mt-44 grid grid-cols-2 gap-5">
      {newsItem?.map(({ imgSrc, title, value }, idx) => (
        <If condition={idx % 2 == 1}>
          <Then>
            <div className="relative">
              <img
                draggable="false"
                className="absolute top-0"
                src={CutterUpper}
                alt="cutter-bottom"
              />
              <div
                key={idx}
                className={`bg-[#F6F6F6] absolute top-[15rem] ml-7 md:max-h-[550px] px-10 py-5 w-full rounded-xl mb-10 w-100 overflow-hidden shadow-sm`}
              >
                <div className="px-6 py-4">
                  <div className="font-bold md:text-base 2xl:text-2xl lg:text-xl mb-2">
                    {title}
                  </div>
                  <p className="text-gray-700 text-sm 2xl:text-lg">{value}</p>
                  <div className="mt-6">
                    <img
                      draggable="false"
                      className="rounded-xl w-full"
                      src={imgSrc}
                      alt={title}
                    />
                  </div>
                </div>
              </div>
              <img
                draggable="false"
                className="absolute md:-bottom-[10rem] lg:-bottom-[26rem] 2xl:-bottom-[35rem]"
                src={CutterBottom}
                alt="cutter-bottom"
              />
            </div>
          </Then>
          <Else>
            {renderCard({
              idx,
              imgSrc,
              title,
              value,
            })}
          </Else>
        </If>
      ))}
    </div>
  );
}
