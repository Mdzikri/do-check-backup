import React, { useMemo } from "react";
import { Else, If, Then } from "react-if";

import DoCheck from "../../assets/images/docheck-logo.png";
import JobHiring from "../../assets/images/job-hiring.png";
import useData from "../../hooks/useData";

const staticImage = [DoCheck, DoCheck, DoCheck];

export default function Timeline() {
  const { data } = useData();

  const timelineItem = useMemo(
    () =>
      data?.timelineItem?.map((item, idx) => ({
        ...item,
        src: staticImage[idx],
      })),
    [data]
  );

  return (
    <div className="px-24 ma-auto block mt-10 mb-10">
      <section>
        <div className="bg-[#2A9EF4] text-white py-8 rounded-xl">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-yellow-300 2xl:text-lg uppercase tracking-loose">
                Lorem ipsum
              </p>
              <p className="text-3xl md:text-3xl 2xl:text-4xl leading-normal md:leading-relaxed mb-2">
                Lorem ipsum dolor sit, amet
              </p>
              <p className="text-sm md:text-base 2xl:text-xl 2xl:mt-3 text-gray-50 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aut nobis iste. Minima, harum? Accusantium quibusdam
                minima consectetur voluptatem dolores, illum quasi libero nam
                ipsam, repudiandae doloribus tempore, sed laborum!
              </p>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #FFC100",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border z-20"
                    style={{
                      left: "50%",
                      border: "2px solid #FFC100",
                      borderRadius: "1%",
                    }}
                  ></div>
                  {timelineItem?.map(({ description, src, title }, idx) => (
                    <If key={idx} condition={idx % 2 == 1}>
                      <Then>
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                          <div className="order-1 w-5/12"></div>

                          <div className="order-1 w-5/12 px-1 py-4 text-right">
                            <div className="mb-3 lg:w-2/4 flex m-auto">
                              <img
                                draggable={false}
                                src={src}
                                alt="docheck-logo"
                                className="rounded-full"
                                placeholder="blur"
                              />
                            </div>
                            <p className="mb-3 text-2xl 2xl:text-3xl font-bold">
                              {title}
                            </p>

                            <p className="text-sm 2xl:text-lg md:text-base leading-snug text-gray-50 text-opacity-100">
                              {description}
                            </p>
                          </div>
                        </div>
                      </Then>
                      <Else>
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                          <div className="order-1 w-5/12"></div>
                          <div className="order-1  w-5/12 px-1 py-4 text-left">
                            <div className="mb-3 lg:w-2/4 flex m-auto">
                              <img
                                draggable={false}
                                src={src}
                                alt="docheck-logo"
                                className="rounded-full"
                                placeholder="blur"
                              />
                            </div>
                            <p className="mb-3 text-2xl 2xl:text-3xl font-bold">
                              {title}
                            </p>
                            <p className="text-sm 2xl:text-lg md:text-base leading-snug text-gray-50 text-opacity-100">
                              {description}
                            </p>
                          </div>
                        </div>
                      </Else>
                    </If>
                  ))}
                </div>
                <div className="mx-auto flex justify-center relative -mt-20 md:-mt-20 z-50">
                  <img draggable={false} src={JobHiring} placeholder="blur" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
