import React from "react";
import Button from "../../components/button/button";
import ArrowRightIcon from "../../assets/images/icons/arrow-right-icon.png";
import { navigate } from "gatsby";

const CollabSection = () => {
  return (
    <section id="section-collab" className="px-10 md:px-32">
      <div className="bg-[#fff] flex flex-col justify-center items-center shadow-lg py-10 px-5 rounded-[30px] drop-shadow-xl">
        <h2 className="text-[22px] text-black font-bold">
          Collaborate with Wool, allow people to contribute their best!
        </h2>
        <Button
          icon={ArrowRightIcon}
          className="mt-10"
          onClick={() => navigate("/")}
        >
          Request FREE Demo
        </Button>
      </div>
    </section>
  );
};

export default CollabSection;