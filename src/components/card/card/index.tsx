import React from "react";
import "./style.scss";

interface CardProps {
  image?: string;
  title: string;
  content: string | JSX.Element;
}

const Card: React.FC<CardProps> = ({ image, title, content }) => {
  return (
    <div className="card shadow-md">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <h4 className="card-title">{title}</h4>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
