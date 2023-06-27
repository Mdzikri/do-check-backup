import React from "react";

interface IButtonProps {
  children: string | JSX.Element | React.ReactNode;
  pill?: boolean;
  className?: string;
  icon?: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  pill,
  onClick,
  className,
  icon,
}) => {
  return (
    <button
      className={`${pill ? "rounded-[100px]" : "rounded-[10px]"} ${
        className ? className : " "
      } bg-wool-blue py-2 px-6 md:py-4 md:px-12 text-sm md:text-md text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wool-blue flex justify-between items-center`}
      onClick={onClick}
    >
      {children}
      {icon && (
        <div className="w-[20px] ml-4">
          <img placeholder="blur" src={icon} alt="arrow-icon" />
        </div>
      )}
    </button>
  );
};

export default Button;
