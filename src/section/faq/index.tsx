import React, { useState } from "react";
import Title from "../../components/title";
import Accordion from "../../components/accordion";
import { faqData } from "../../dummy/faq";

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section id="section-fact" className="py-16 md:px-36">
      <Title>FAQ</Title>
      <div className="py-10">
        {faqData.map((faq) => {
          return (
            <Accordion
              key={faq.id}
              onClick={() => setActiveTab(faq.id)}
              label={faq.question}
              isOpen={activeTab === faq.id}
            >
              <p>{faq.answer}</p>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
