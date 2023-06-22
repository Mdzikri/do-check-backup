import React from "react";
import ChevronDown from "../../../assets/images/icons/chevron-down-icon.png";

interface DropdownProps {
  label: string;
  isOpen: boolean;
  number: number;
  children: string | JSX.Element | React.ReactNode;
  onClick?: () => void;
}

const Expandable: React.FC<DropdownProps> = ({
  isOpen,
  number,
  label,
  children,
  onClick,
}) => {
  return (
    <>
      <div
        className={`px-5 py-5 flex justify-between items-center font-bold ${
          isOpen
            ? " rounded-[30px] bg-wool-background-secondary text-wool-blue"
            : "cursor-pointer"
        }`}
        onClick={onClick}
      >
        <div className="flex items-center">
          <span
            className={`flex items-center justify-center rounded-full w-[50px] h-[50px] mr-2 ${
              isOpen ? "bg-white" : "bg-wool-background-secondary"
            }`}
          >
            {number}
          </span>{" "}
          {label}
        </div>
        <div>
          <img src={ChevronDown} alt="chevron-down" />
        </div>
      </div>
      {isOpen && <div className="px-5 py-5 text-[14px]">{children}</div>}
    </>
  );
};

export default Expandable;
