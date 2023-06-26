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
    <div className="flex flex-start items-center">
      <h2 className="font-bold text-[#3e3e3e] text-[30px] mr-10">{time}</h2>
      <div className="relative border-l-2">
        <div
          className={`${
            isActive ? "bg-wool-blue" : "bg-wool-blue/50"
          } absolute absolute -left-[10px] top-0 bottom-0 m-auto rounded-full h-[20px] w-[20px]`}
        />
        <div className="flex items-center p-10">
          <div className="w-[25%] mr-10">
            <img className="w-full" src={illustration} alt="Timeline" />
          </div>
          <div className="w-[70%]">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
