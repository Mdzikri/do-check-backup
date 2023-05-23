import React from "react";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl"

import Hug from "../../assets/images/hug.png";
import Yolo from "../../assets/images/yolo.png";

import "./style.scss";

export default injectIntl(function Hero({ intl }) {
  return (
    <>
      <div className="bg-[#d4ecfd] relative">
        <div className="absolute hug bottom-0">
          <img
            draggable="false"
            className="md:w-2/5 lg:w-8/12"
            alt="hug"
            src={Hug}
          />
        </div>
        <div className="absolute yolo top-20 right-0 flex justify-end">
          <img
            draggable="false"
            className="md:w-1/3 md:mr-10 lg:w-8/12 "
            alt="hug"
            src={Yolo}
          />
        </div>
        <div className="relative isolate px-6 pt-3 lg:px-8">
          <div
            className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {intl.formatMessage({ id: "greeting" })}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {intl.formatMessage({ id: "potential" })}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-[100px] bg-[#2A9EF4] pt-5 pb-5 pl-16 pr-16 text-lg text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A9EF4]"
                >
                  {intl.formatMessage({ id: "readyConsultation" })}
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </>
  );
}
)