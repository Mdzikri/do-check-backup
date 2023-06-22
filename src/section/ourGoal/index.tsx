import React from "react";
import Title from "../../components/title";
import Logo from "../../assets/images/logo-blue.png";
import Attonement from "../../assets/images/attonements/circle-group-attonement.png";

const OurGoalSection = () => {
  return (
    <section
      id="section-goal"
      className="px-8 md:px-36 py-2 relative h-[380px]"
    >
      <img
        src={Attonement}
        alt="background-image"
        className="w-[200px] absolute top-0 md:right-32 transform -scale-y-100 rotate-180"
      />
      <Title>That's Where We Come In</Title>
      <div className="md:flex justify-center items-center py-10 md:py-20">
        <div className="hidden md:w-[50%] md:flex flex-row-reverse pr-10">
          <img className="md:w-[320px]" src={Logo} alt="Wool Logo" />
        </div>
        <div className="md:w-[50%] md:px-20 text-[16px] text-[#3e3e3e]">
          A digital platform that helps you manage mental health & transform
          mindsets in a more precise direction
        </div>
      </div>
      <img
        src={Attonement}
        alt="background-image"
        className="hidden md:block w-[200px] absolute bottom-0 md:left-48"
      />
    </section>
  );
};

export default OurGoalSection;
