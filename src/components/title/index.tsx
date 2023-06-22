import React from "react";
import "./style.scss";

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className="section-header">
      <h2 className="header-text">{children}</h2>
      <div className="header-divider" />
    </div>
  );
};

export default Title;
