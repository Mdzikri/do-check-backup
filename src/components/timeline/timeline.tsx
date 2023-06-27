import React from "react";

interface TimelineProps {
  time: string | number;
  isActive: boolean;
  illustration: string;
  description: string;
}

const Timeline: React.FC<TimelineProps> = ({
  time,
  isActive,
  illustration,
  description,
}) => {
  return (
    <div className="md:flex flex-start items-center">
      <h2 className="font-bold text-[#3e3e3e] text-[30px] mr-10">{time}</h2>
      <div className="relative border-l-2">
        <div
          className={`${
            isActive ? "bg-wool-blue" : "bg-wool-blue/50"
          } absolute absolute -left-[10px] -top-1 md:top-0 md:bottom-0 m-auto rounded-full h-[20px] w-[20px]`}
        />
        <div className="md:flex items-center p-10">
          <div className="md:w-[25%] mr-10 mb-5 md:mb-0 ">
            <img className="w-full" src={illustration} alt="Timeline" />
          </div>
          <div className="md:w-[70%]">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
