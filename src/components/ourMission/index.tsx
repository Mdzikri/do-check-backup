import React from "react";

import Gas from "../../assets/images/gas.png";
import UnionFull from "../../assets/images/union-full.png";
import useData from "../../hooks/useData";

const ourValuesStatic = [
  {
    id: 0,
    title: "Solar System",
    src: Gas,
    description:
      "Make the appearance of a mobile application that has quality and increases user convenience",
  },
  {
    id: 1,
    title: "Recycling",
    src: Gas,
    description:
      "Help create a website and redesign it so that it becomes a website that is more trendy and looks fresh",
  },
  {
    id: 2,
    title: "Plant Trees",
    src: Gas,
    description:
      "Create customizable illustrations with attractive designs that are made visually through high creativity",
  },
  {
    id: 3,
    title: "Clean Energy",
    src: Gas,
    description:
      "Change the appearance of a design into code that will be made into an amazing website",
  },
  {
    id: 4,
    title: "Eco System",
    src: Gas,
    description:
      "Create 2d / 3d video animation in a short period of time designed to promote a company product",
  },
  {
    id: 5,
    title: "Water Refine",
    src: Gas,
    description: "Help your business grow with our SEO Experts",
  },
];

const staticImage = [Gas, Gas, Gas, Gas, Gas, Gas]

export default function OurMission() {
  const { data } = useData()

  const ourValues = data?.ourValues?.map((item, idx) => ({
    ...item,
    src: staticImage[idx]
  }));

  return (
    <div className="flex m-auto px-24 flex-col mt-20 mb-64 relative">
      <img
        className="absolute top-0 -z-50 left-0"
        src={UnionFull}
        alt="union-full"
      />
      <div className="flex flex-col items-center mb-32">
        <h3 className="text-4xl font-bold color-[#3E3E3E] mb-12 mt-36">
          Our Mission
        </h3>
        <p className="text-center w-2/3 font-[#3E3E3E] text-base">
          Our core aim is to fight mental health stigma to build healthy and
          thriving communities. We want to leverage digital solutions to
          increase accessibility to quality emotional health support. We offer
          you science-backed wellness tools, activities and online counselling
          for safe, convenient and personalised care.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-bold color-[#3E3E3E] mb-12">Our Values</h3>
        <div className="grid grid-cols-3 gap-10 w-10/12">
          {ourValues?.map(({ description, src, title }, idx) => (
            <a key={idx} href="#" className="block max-w-sm p-6 bg-transparent">
              <div className="flex justify-center items-center rounded-xl mb-4 bg-[#FCEEDD] w-[60px] h-[60px]">
                <img
                  className="w-1/2"
                  draggable={false}
                  src={src}
                  alt={title}
                />
              </div>
              <h5 className="mb-2 text-xl font-bold tracking-tight">{title}</h5>
              <p className="font-normal  dark:text-gray-400">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
