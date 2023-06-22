import React from "react";
import Title from "../../components/title";
import Card from "../../components/card/card";
import { woolFeaturesData } from "../../dummy/woolFeatures";

const WoolFeatureSection = () => {
  return (
    <section id="section-wool-feature" className="py-2 px-10">
      <Title>Features in Wool</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-20">
        {woolFeaturesData.map((feature) => {
          return (
            <Card
              key={feature.id}
              title={feature.title}
              content={feature.description}
              image={feature.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WoolFeatureSection;
