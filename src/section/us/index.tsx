import React from "react";

import UsImage from "../../assets/images/us.png";

export default function Us() {
  return (
    <div className="mt-10 mb-10">
      <div className="flex items-center justify-center">
        <div className="w-100 w-2/4 mb-10">
          <h4 className="text-center font-bold md:text-[32px] lg:text-[35px] 2xl:text-[45px] md:leading-[45px]">
            Kalau kamu ngerasain salah satu bahkan semua hal di atas,
          </h4>
        </div>
      </div>

      <div className="flex md:w-5/6 lg:w-2/4 2xl:w-4/12 m-auto p-5">
        <img
          placeholder="blur"
          draggable="false"
          className="md:w-80"
          alt="us"
          src={UsImage}
        />
        <div className="description-wrapper relative">
          <div className="absolute md:w-[400px] md:-left-[70px] 2xl:-left-[40px]">
            <h4 className="md:leading-[50px] mb-5 md:text-[37px] 2xl:text-[40px] lg:text-[42px]">
              Maka perkenalkan kami, WOOL
            </h4>
            <span className="text-sm 2xl:text-lg">
              “We Open Our Lives” ialah sebuah gerakan yang peduli dengan mentah
              health, terutama pemuda-pemudi Indonesia agar bisa lebih sehat,
              karena kami yakin “There is no Health without Mental Health”
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
