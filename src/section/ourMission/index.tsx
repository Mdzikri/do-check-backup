import React from "react";
import Title from "../../components/title";
import MissionIllustration from "../../assets/images/mission-illustration.svg";

const OurMissionSection: React.FC = () => {
  return (
    <section id="section-mission" className="p-10 md:px-36">
      <Title>Our Mission</Title>
      <div className="flex items-center justify-between py-10">
        <div className="md:w-[60%]">
          Our core aim is to fight mental health stigma to build healthy and
          thriving communities. We want to leverage digital solutions to
          increase accessibility to quality emotional health support. We offer
          you science-backed wellness tools, activities and online counselling
          for safe, convenient and personalised care.
        </div>
        <div className="md:w-[40%]">
          <img
            className="w-[100%]"
            src={MissionIllustration}
            alt="Wool Missions"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
