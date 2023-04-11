import React, { useCallback } from "react";
import { Else, If, Then } from "react-if";

import FirstNews from "../../assets/images/first-news.png";
import SecondNews from "../../assets/images/second-news.png";
import ThirdNews from "../../assets/images/third-news.png";

import CutterBottom from "../../assets/images/Vector 711.png";
import CutterUpper from "../../assets/images/Vector 710.png";

interface RenderCard {
  idx: number;
  imageSrc: string;
  title: string;
  value: string;
}

const newsStatic = [
  {
    id: 0,
    imageSrc: FirstNews,
    title: "Coaching: The Best Practice to Improve Your Mental Health @work",
    value:
      "Disini kamu akan dicoaching bagaimana cara praktis buat meningkatkan mental health kamu di tempat kerja supaya kamu bisa lebih produktif dan lebih banyak prestasi",
  },
  {
    id: 1,
    imageSrc: SecondNews,
    title: "Problem Worksheet Siap Pakai",
    value: "Agar membantu kamu memudahkan proses coaching tersebut",
  },
  {
    id: 2,
    imageSrc: ThirdNews,
    title: "Team Support & Exclusive Community",
    value:
      "Komunitas untuk bisa saling berdiskusi, membangun lingkungan yang produktif, bertanya soal materi yang ada di dalam event, dan juga akan ada event menyenangkan lain di dalamnya",
  },
];

export default function News() {
  const renderCard = useCallback(
    ({ idx, imageSrc, title, value }: RenderCard) => (
      <div
        key={idx}
        className={`mb-10 px-10 py-5 w-100 md:max-h-[550px] bg-[#F6F6F6] w-full rounded-xl overflow-hidden shadow-sm`}
      >
        <div className="px-6 py-4">
          <div className="font-medium text-2xl mb-2 text-[#222222]">
            {title}
          </div>
          <p className="text-gray-700 text-sm">{value}</p>
          <div className="mt-6">
            <img className="rounded-xl w-full" src={imageSrc} alt={title} />
          </div>
        </div>
      </div>
    ),
    []
  );
  return (
    <div className="news px-32 mt-36 grid grid-cols-2 gap-5">
      {newsStatic.map(({ imageSrc, title, value }, idx) => (
        <If condition={idx % 2 == 1}>
          <Then>
            <div className="relative">
              <img
                className="absolute top-0"
                src={CutterUpper}
                alt="cutter-bottom"
              />
              <div
                key={idx}
                className={`bg-[#F6F6F6] absolute top-[15rem] ml-7 md:max-h-[550px] px-10 py-5 w-full rounded-xl mb-10 w-100 overflow-hidden shadow-sm`}
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-sm">{value}</p>
                  <div className="mt-6">
                    <img
                      className="rounded-xl w-full"
                      src={imageSrc}
                      alt={title}
                    />
                  </div>
                </div>
              </div>
              <img
                className="absolute md:-bottom-[26rem]"
                src={CutterBottom}
                alt="cutter-bottom"
              />
            </div>
          </Then>
          <Else>
            {renderCard({
              idx,
              imageSrc,
              title,
              value,
            })}
          </Else>
        </If>
      ))}
    </div>
  );
}
