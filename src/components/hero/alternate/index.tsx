import React from "react";

import Display from "../../../assets/images/display.png";
import MiscOne from "../../../assets/images/misc-1.png";
import MiscTwo from "../../../assets/images/misc-2.png";

export default function HeroAlternate() {
  return (
    <>
      <div className="bg-[#d4ecfd] relative overflow-hidden">
        <div className="relative isolate px-6 pt-3 lg:px-8">
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
          <div className="mx-auto max-w-2xl md:pt-36 lg:py-32 z-40 lg:pt-32 lg:pb-0">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Employees Need to Improve Their Mental Health, Right Now!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 2xl:text-xl 2xl:mt-10">
                Employees are the most valuable investment asset! It’s in the
                smallest moments that mental health support can really make a
                difference. We get that. Each feature and value of our platform
                is curated with your comfort in mind.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <img draggable={false} alt="display" src={Display} />
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
