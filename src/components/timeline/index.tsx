import React from "react";
import { Else, If, Then } from "react-if";

import DoCheck from "../../assets/images/docheck-logo.png";
import JobHiring from "../../assets/images/job-hiring.png";

const timelineStatic = [
  {
    id: 0,
    title: "2021",
    src: DoCheck,
    description:
      "Tahun 2021, lahirlah platform digital DoCheck untuk active share todo list dengan harapan Generasi Milenial dan Generasi Z bisa meningkatkan produktivitas dengan platform DoCheck dan saling berbagi tacit knowledge",
  },
  {
    id: 1,
    title: "2022",
    src: DoCheck,
    description:
      "Tahun 2022, DoZine dibuat sebagai sebuah platform majalah digital, khusus Generasi Milenial dan Generasi Z tuk bisa bercerita tentang knowledge, gaya hidup, dan karya",
  },
  {
    id: 2,
    title: "2023",
    src: DoCheck,
    description:
      "Tahun 2023, lahir sebuah digital mental health platform bernama Wool (We Open Our Lives), untuk fokus pada perbaikan mental health Generasi Milenial dan Generasi Z.",
  },
];

export default function Timeline() {
  return (
    <div className="px-24 ma-auto block mt-10 mb-10">
      <section>
        <div className="bg-[#2A9EF4] text-white py-8 rounded-xl">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-yellow-300 uppercase tracking-loose">
                Lorem ipsum
              </p>
              <p className="text-3xl md:text-3xl leading-normal md:leading-relaxed mb-2">
                Lorem ipsum dolor sit, amet
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
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
                  {timelineStatic.map(({ description, src, title }, idx) => (
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
                              />
                            </div>
                            <p className="mb-3 text-2xl font-bold">{title}</p>

                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
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
                              />
                            </div>
                            <p className="mb-3 text-2xl font-bold">{title}</p>
                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                              {description}
                            </p>
                          </div>
                        </div>
                      </Else>
                    </If>
                  ))}
                  {/* <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        1-6 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Registration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Pick your favourite event(s) and register in that event
                        by filling the form corresponding to that event. Its
                        that easy :)
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">
                        6-9 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Participation
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Participate online. The links for your registered events
                        will be sent to you via email and whatsapp groups. Use
                        those links and show your talent.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        {" "}
                        10 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Result Declaration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The ultimate genius will be revealed by our judging
                        panel on 10th May, 2021 and the resukts will be
                        announced on the whatsapp groups and will be mailed to
                        you.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">
                        12 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Prize Distribution
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their
                        addresses and the winning goodies will be sent at their
                        addresses.
                      </p>
                    </div>
                  </div> */}
                </div>
                <div className="mx-auto flex justify-center relative -mt-20 md:-mt-20 z-50">
                  <img draggable={false} src={JobHiring} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
