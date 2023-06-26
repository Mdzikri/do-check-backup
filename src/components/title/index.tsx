import React from "react";
import "./style.scss";

interface TitleProps {
  children: string;
  subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ children, subtitle }) => {
  return (
    <div className="section-header">
      <div className="inline-block">
        <h2 className="header-text">{children}</h2>
        {subtitle && <h4 className="mb-4 text-[#7A7A7A]">{subtitle}</h4>}
        <div className="header-divider" />
      </div>
    </div>
  );
};

export default Title;
