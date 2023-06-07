import React from "react";

export default function HeroSecondary() {
  return (
    <>
      <div className="bg-white relative overflow-hidden">
        <div className="relative isolate px-6 pt-3 lg:px-8">
          <div
            className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>

          <div className="mx-auto max-w-2xl md:pt-36 lg:py-32 z-40 lg:pt-32 lg:pb-0">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Jadi Gini Ceritanya...
              </h1>
              <p className="mt-6 text-lg 2xl:text-xl leading-8 text-gray-600">
                Sebuah cerita agar lebih dekat dengan Wool
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
