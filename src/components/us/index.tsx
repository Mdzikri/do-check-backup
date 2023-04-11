import React from "react";

import UsImage from "../../assets/images/us.png";

export default function Us() {
  return (
    <div className="mt-10 mb-10">
      <div className="flex items-center justify-center">
        <div className="w-100 w-2/4 mb-10">
          <h4 className="text-center font-bold text-[35px] md:leading-[45px]">
            Kalau kamu ngerasain salah satu bahkan semua hal di atas,
          </h4>
        </div>
      </div>

      <div className="flex w-2/4 m-auto  p-5">
        <img className="w-80" alt="us" src={UsImage} />
        <div className="description-wrapper relative">
          <div className="absolute md:w-[400px] md:-left-[70px]">
            <h4 className="md:leading-[50px] mb-5 text-[42px]">
              Maka perkenalkan kami, WOOL
            </h4>
            <span className="text-sm">
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
