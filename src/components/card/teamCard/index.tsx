import React from "react";
import "./style.scss";

interface CardTeamProps {
  image: string;
  name: string;
  position: string;
}

const CardTeam: React.FC<CardTeamProps> = ({ image, name, position }) => {
  return (
    <div className="team-card">
      <img className="w-full" src={image} alt={name} />
      <div className="team-card-tag">
        <h6 className="font-semibold text-[18px] text-wool-blue">{name}</h6>
        <h6 className="text-[14px] text-[#b2b2b2]">{position}</h6>
      </div>
    </div>
  );
};

export default CardTeam;
