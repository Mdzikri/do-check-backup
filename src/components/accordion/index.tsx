import React from "react";
import ChevronDown from "../../assets/images/icons/chevron-down-icon.png";

interface DropdownProps {
  label: string;
  isOpen: boolean;
  number?: number;
  children: string | JSX.Element | React.ReactNode;
  onClick?: () => void;
}

const Accordion: React.FC<DropdownProps> = ({
  isOpen,
  number,
  label,
  children,
  onClick,
}) => {
  return (
    <>
      <div
        className={`rounded-[30px] mt-2 px-5 py-5 flex justify-between items-center font-bold ${
          isOpen
            ? "bg-wool-background-secondary text-wool-blue"
            : "cursor-pointer shadow-sm"
        }`}
        onClick={onClick}
      >
        <div className="flex items-center">
          {number && (
            <span
              className={`flex items-center justify-center rounded-full w-[50px] h-[50px] mr-2 ${
                isOpen ? "bg-white" : "bg-wool-background-secondary"
              }`}
            >
              {number}
            </span>
          )}{" "}
          {label}
        </div>
        <div>
          <img
            placeholder="blur"
            className={`transition ease-in-out delay-150 ${
              isOpen ? "" : "rotate-[270deg]"
            }`}
            src={ChevronDown}
            alt="chevron-down"
          />
        </div>
      </div>
      <div
        className={`px-5 py-5 text-[16px] transition ease-out delay-200 ${
          isOpen ? "relative" : "absolute -translate-y-[100px] -z-50 opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Accordion;
