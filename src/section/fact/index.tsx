import React from "react";
import Title from "../../components/title";
import { factData } from "../../dummy/fact";

const FactSection = () => {
  return (
    <section id="section-fact" className="px-8 md:px-36 py-2">
      <Title>If you're wondering why this happened</Title>
      <div className="py-16">
        {factData.map((fact, i) => {
          return (
            <div key={i} className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-[50%]">
                <h2 className="font-bold text-[22px] text-wool-dark-purple">{fact.author}</h2>
                <p className="text-wool-neutral-200/70">{fact.quotes}</p>
              </div>
              <div
                className={`md:w-[50%] flex justify-center ${
                  i % 2 === 0 ? "md:order-last" : "md:order-first"
                }`}
              >
                <img src={fact.illustration} alt={`illustration-${i}`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FactSection;
