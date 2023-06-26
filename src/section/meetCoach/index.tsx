import React from "react";
import Title from "../../components/title";
import { coachData } from "../../dummy/coach";
import { corporateClientData } from "../../dummy/client";

const MeetCoachSection = () => {
  return (
    <section id="section-meet-coach" className="px-10 md:px-36 py-2">
      <Title>Let's Meet One of Our Coach</Title>
      <div className="flex flex-col md:flex-row justify-center items-center py-10">
        <div className="md:w-[50%]">
          <img
            src={coachData.coach_photo}
            alt={coachData.coach_name}
            placeholder="blur"
          />
        </div>
        <div className="md:w-[50%] flex flex-col justify-center">
          <h2 className="text-wool-blue text-[24px] font-bold">
            {coachData.coach_name}
          </h2>
          <ul className="list-disc ml-6">
            {coachData.description.map((coach, i) => {
              return (
                <li className="my-4 text-[16px]" key={i}>
                  {coach.value}
                </li>
              );
            })}
          </ul>
          <div className="mt-5">
            <h2 className="text-[#3e3e3e] font-[22px] font-bold">
              Client Corporate
            </h2>
            <div className="flex py-4">
              {corporateClientData.map((client) => {
                return (
                  <img
                    className="w-[50px] mr-5"
                    key={client.id}
                    src={client.image}
                    alt={client.name}
                    placeholder="blur"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center md:px-48 md:py-20 text-[#3E3E3E]">
        <q className="block text-[20px]">
          “When people are fiinancially invested, they want a return. When
          people are emotionally invested, they want to contribute.”
        </q>
        <span className="block text-[16px] text-wool-neutral-200/60 mt-4">
          Simon Sinek-
        </span>
      </div>
    </section>
  );
};

export default MeetCoachSection;
