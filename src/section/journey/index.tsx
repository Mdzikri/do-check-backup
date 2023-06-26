import React from "react";
import Title from "../../components/title";
import Timeline from "../../components/timeline/timeline";
import { journeyData } from "../../dummy/journey";

const JourneySection: React.FC = () => {
  return (
    <section id="section-journey" className="px-10 md:px-36">
      <Title subtitle="A Story to get closer to Wool">Our Journey</Title>
      <div className="py-10">
        {journeyData.map((journey, i) => {
          return (
            <Timeline
              key={journey.id}
              time={journey.time}
              illustration={journey.illustration}
              description={journey.description}
              isActive={i === 0}
            />
          );
        })}
      </div>
    </section>
  );
};

export default JourneySection;
