import React from "react";
import Title from "../../components/title";
import Card from "../../components/card/card";
import { valuesData } from "../../dummy/values";

const OurValueSection = () => {
  return (
    <section id="section-our-value" className="p-10 md:px-36">
      <Title>Our Value</Title>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
        {valuesData.map((value) => {
          return (
            <Card
              key={value.id}
              image={value.icon}
              title={value.title}
              content={value.content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurValueSection;
