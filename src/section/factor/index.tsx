import React from "react";
import Title from "../../components/title";
import { factData } from "../../dummy/fact";
import BackgroundLeft from "../../assets/images/attonements/background-attonement-left.png";
import BackgroundRight from "../../assets/images/attonements/background-attonement-right.png";

const FactorSection = () => {
  return (
    <section id="section-fact" className="relative px-8 md:px-36 py-2">
      <Title>If you're wondering why this happened</Title>
      <img
        className="absolute left-0 top-0 w-[200px]"
        src={BackgroundLeft}
        alt="wool id"
        placeholder="blur"
      />
      <div className="py-16">
        {factData.map((fact, i) => {
          return (
            <div
              key={i}
              className="flex flex-col md:flex-row justify-between items-center"
            >
              <div className="md:w-[50%]">
                <h2 className="text-[20px] text-wool-dark-purple mb-2">
                  {fact.quotes}
                </h2>
                <p className="text-wool-neutral-200/70 text-[16px]">{fact.author}</p>
              </div>
              <div
                className={`md:w-[50%] flex justify-center ${
                  i % 2 === 0 ? "md:order-last" : "md:order-first"
                }`}
              >
                <img
                  src={fact.illustration}
                  alt={`illustration-${i}`}
                  placeholder="blur"
                />
              </div>
            </div>
          );
        })}
      </div>
      <img
        className="absolute right-0 bottom-0 w-[200px] hidden sm:block"
        src={BackgroundRight}
        alt="wool id"
        placeholder="blur"
      />
    </section>
  );
};

export default FactorSection;
