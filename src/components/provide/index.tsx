import React from "react";
import { Else, If, Then } from "react-if";

const provideStatic = [
  {
    id: 0,
    title: "Personality Profiling",
    target: "collapseOne",
    headingTarget: "headingOne",
    isActive: true,
    value: (
      <p>
        <b>
          Recognize yourself in mapping the narrative spectrum of present mental
          health states
        </b>
        with the modern Enneagram method (US Standard) and focus on potential
        value during consultation sessions with professional coaches
        <b>inside Wool platform.</b>
      </p>
    ),
  },

  {
    id: 1,
    title: "Career Coaching",
    target: "collapseTwo",
    headingTarget: "headingTwo",
    isActive: false,
    value: (
      <p>
        <b>
          Recognize yourself in mapping the narrative spectrum of present mental
          health states
        </b>
        with the modern Enneagram method (US Standard) and focus on potential
        value during consultation sessions with professional coaches
        <b>inside Wool platform.</b>
      </p>
    ),
  },

  {
    id: 2,
    title: "SMART Journaling",
    target: "collapseThree",
    headingTarget: "headingThree",
    isActive: false,
    value: (
      <p>
        <b>
          Recognize yourself in mapping the narrative spectrum of present mental
          health states
        </b>
        with the modern Enneagram method (US Standard) and focus on potential
        value during consultation sessions with professional coaches
        <b>inside Wool platform.</b>
      </p>
    ),
  },

  {
    id: 3,
    title: "Career Evaluation & Recomendation Mapping",
    target: "collapseFour",
    headingTarget: "headingFour",
    isActive: false,
    value: (
      <p>
        <b>
          Recognize yourself in mapping the narrative spectrum of present mental
          health states
        </b>
        with the modern Enneagram method (US Standard) and focus on potential
        value during consultation sessions with professional coaches
        <b>inside Wool platform.</b>
      </p>
    ),
  },
];

export default function Provide() {
  return (
    <div id="accordionExample" className="md:w-5/6 md:mt-10 lg:mt-16 block m-auto mb-10">
      <div className="block text-center mb-4">
        <h4 className="md:text-[34px] font-lg">We Provide</h4>
      </div>
      {provideStatic.map(
        ({ title, value, isActive, target, headingTarget }, idx) => (
          <If key={idx} condition={isActive}>
            <Then>
              <div className="rounded-t-lg border border-neutral-200 bg-[#F6F6F6]">
                <h2 className="mb-0" id="headingOne">
                  <button
                    className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-[#F6F6F6]  px-5 py-4 text-left text-base font-bold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-[#F6F6F6] [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {title}
                    <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="!visible"
                  data-te-collapse-item
                  data-te-collapse-show
                  aria-labelledby="headingOne"
                  data-te-parent="#accordionExample"
                >
                  <div className="px-5 py-4">{value}</div>
                </div>
              </div>
            </Then>
            <Else>
              <div className="border border-t-0 border-neutral-200 bg-[#F6F6F6]">
                <h2 className="mb-0" id={headingTarget}>
                  <button
                    className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-[#F6F6F6] px-5 py-4 text-left text-base font-bold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-[#F6F6F6] [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target={`#${target}`}
                    aria-expanded="false"
                    aria-controls={target}
                  >
                    {title}
                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id={target}
                  className="!visible hidden"
                  data-te-collapse-item
                  aria-labelledby={headingTarget}
                  data-te-parent="#accordionExample"
                >
                  <div className="px-5 py-4">{value}</div>
                </div>
              </div>
            </Else>
          </If>
        )
      )}
    </div>
  );
}
