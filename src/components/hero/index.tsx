import { injectIntl } from "gatsby-plugin-react-intl";
import React from "react";

import Hug from "../../assets/images/hug.png";
import Yolo from "../../assets/images/yolo.png";

import "./style.scss";
import { useAnalytics } from "../../hooks/useAnalytics";
import Button from "../button/button";

export default injectIntl(function Hero({ intl }) {
  const { gtag } = useAnalytics();

  return (
    <>
      <div className="bg-[#d4ecfd] relative">
        <div className="absolute hug bottom-0">
          <img
            draggable="false"
            className="md:w-2/5 lg:w-8/12 2xl:w-10/12"
            alt="hug"
            src={Hug}
          />
        </div>
        <div className="absolute yolo top-20 right-0 flex justify-end">
          <img
            draggable="false"
            className="md:w-1/3 md:mr-10 2xl:w-10/12 lg:w-8/12 "
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
              <h1 className="text-4xl 2xl:text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {intl.formatMessage({ id: "greeting" })}
              </h1>
              <p className="mt-6 text-lg 2xl:text-2xl leading-8 text-gray-600">
                {intl.formatMessage({ id: "potential" })}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button onClick={() => gtag({ test: "data" })} pill={true}>
                  {intl.formatMessage({ id: "readyConsultation" })}
                </Button>
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
});
