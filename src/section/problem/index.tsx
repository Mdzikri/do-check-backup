import React from "react";
import Title from "../../components/title";
import Card from "../../components/card/card";
import { problemData } from "../../dummy/problem";

const ProblemSection = () => {
  return (
    <section id="section-problem" className="px-8 md:px-36 py-10">
      <Title>Does your company show any signs like this</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center py-10">
        {problemData.map((problem) => {
          return (
            <Card
              key={problem.id}
              image={problem.image}
              title={problem.title}
              content={problem.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProblemSection;
