import React from "react";
import Title from "../../components/title";
import CardTeam from "../../components/card/teamCard";
import { teamData } from "../../dummy/team";

const OurTeamSection = () => {
  return (
    <section id="section-team" className="p-10 md:px-24">
      <Title>Our Team</Title>
      <div className="flex flex-wrap w-full items-center justify-center py-10">
        {teamData.map((team, i) => {
          return (
            <React.Fragment key={team.id}>
              <CardTeam
                image={team.photo}
                name={team.name}
                position={team.position}
              />
              {i === 3 && <div className="basis-full" />}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeamSection;
