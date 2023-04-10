import React from "react";

import Hug from "../../assets/images/hug.png";

export default function Hero() {
  return (
    <>
      <div className="bg-[#d4ecfd] relative">
        <div className="absolute bottom-0">
          <img className="w-8/12" alt="hug" src={Hug} />
        </div>
        <div className="relative isolate px-6 pt-3 lg:px-8">
          <div
            className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Maukah kamu memulai self development, sekarang?
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Karena kamu potensial!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-[100px] bg-[#2A9EF4] px-3.5 py-2.5 text-lg text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A9EF4]"
                >
                  Mulai Konsultasi
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
