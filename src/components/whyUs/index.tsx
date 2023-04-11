import React, { Fragment } from "react";

const AnalyticsBusniess = [
  {
    id: 0,
    title: "100%",
    value: "Want Change",
    description: "100% of employees want to make positive life changes.",
  },
  {
    id: 1,
    title: "84%",
    value: "Saw Symptom Reduction",
    description:
      "84% experience reduced depressive symptoms following digital wellness interventions.",
  },
  {
    id: 2,
    title: "83%",
    value: "Desire Digital Solutions",
    description:
      "83% say digital mental health solutions are convenient and useful.",
  },
];

export default function WhyUs() {
  return (
    <div className="m-auto flex items-center justify-center px-24 mt-36 mb-36 flex-col">
      <h3 className="font-semibold text-4xl mb-16">
        Why does your business need Wool?
      </h3>
      <div className="grid grid-cols-3 w-4/5 gap-4">
        {AnalyticsBusniess.map(({ description, title, value }, idx) => (
          <div className="flex flex-col items-center justify-center" key={idx}>
            <h2 className="text-[#2A9EF4] font-bold text-4xl mb-3">{title}</h2>
            <p className="font-semibold mt-3 mb-3 text-[#3E3E3E] text-lg">{value}</p>
            <span className="w-3/4 text-center text-lg text-[#3E3E3E] opacity-70">{description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
