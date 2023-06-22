import React from "react";
import "./style.scss";

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className="section-header">
      <div className="inline-block">
        <h2 className="header-text">{children}</h2>
        <div className="header-divider" />
      </div>
    </div>
  );
};

export default Title;
