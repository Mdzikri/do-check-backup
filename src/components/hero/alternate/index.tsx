import React from "react";

import Display from "../../../assets/images/mental-health.png";
import MiscOne from "../../../assets/images/misc-1.png";
import MiscTwo from "../../../assets/images/misc-2.png";
import Button from "../../button/button";

export default function HeroAlternate() {
  return (
    <>
      <div className="bg-[#d4ecfd] relative overflow-hidden">
        <div className="relative isolate md:px-6 pt-3 lg:px-8">
          <div
            className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 2xl:-top-20"
            aria-hidden="true"
          ></div>
          <img
            draggable={false}
            alt="misc-1"
            className="absolute lg:-left-[143.7px] md:-left-[200px] md:top-0 lg-:rotate-[98.9deg]"
            src={MiscOne}
          />
          <div className="lg:flex px-10 md:px-36 items-center justify-between py-24 lg:py-32 z-40 lg:pt-32 lg:pb-20">
            <div className="text-start lg:w-[50%]">
              <h1 className="font-bold text-gray-900 md:leading-[55px] sm:text-[40px]">
                Your Employees Need to Improve Their Mental Health, Right Now!
              </h1>
              <p className="mt-6 text-lg leading-[30px] text-gray-600 2xl:text-[18px] 2xl:mt-10 color-[#3e3e3e]">
                Employees are the most valuable investment asset! It’s in the
                smallest moments that mental health support can really make a
                difference. We get that. Each feature and value of our platform
                is curated with your comfort in mind.
              </p>
              <Button className="mt-10 relative">Get Started</Button>
            </div>
            <div className="hidden md:flex justify-end lg:w-[50%]">
              <div>
                <img src={Display} draggable="false" />
              </div>
            </div>
          </div>
          <img
            draggable={false}
            alt="misc-2"
            className="absolute left-[708px] bottom-0"
            src={MiscTwo}
          />
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </>
  );
}
