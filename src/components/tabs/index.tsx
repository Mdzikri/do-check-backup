import React from "react";
import "./style.scss";

interface TabProps {
  children: JSX.Element | React.ReactNode;
  className?: string;
}

interface TabItemProps {
  children: JSX.Element | React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const Wrapper: React.FC<TabProps> = ({ children }) => {
  return <div className={"tab-wrapper"}>{children}</div>;
};

const Header: React.FC<TabProps> = ({ children }) => {
  return <nav className="tab-navigation">{children}</nav>;
};

const NavItem: React.FC<TabItemProps> = ({ children, isActive, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`tab-navigation-item ${
          isActive ? "active-tab" : "inactive-tab"
        }`}
      >
        {children}
      </div>
    </>
  );
};

const Content: React.FC<TabItemProps> = ({ children, isActive }) => {
  return <div className={isActive ? "block" : "hidden"}>{children}</div>;
};

export default { Wrapper, NavItem, Header, Content };
