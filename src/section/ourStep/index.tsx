import React, { useState } from "react";
import Title from "../../components/title";
import { ourStepData } from "../../dummy/ourStep";
import Accordion from "../../components/accordion";

const OurStepSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="section-wool-step" className="py-2 px-10 md:px-36">
      <Title>Easy 3 Steps in Wool</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5 md:py-14 place-items-center">
        <div>
          {ourStepData.map((step) => {
            return (
              <Accordion
                key={step.id}
                number={step.id + 1}
                onClick={() => setActiveTab(step.id)}
                label={step.title}
                isOpen={activeTab === step.id}
              >
                <p>{step.content}</p>
              </Accordion>
            );
          })}
        </div>
        <div className="order-first md:order-last">
          <img
            src={ourStepData[activeTab].image}
            alt="Do Check Steps"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStepSection;
