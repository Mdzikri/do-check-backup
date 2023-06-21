import React from "react";

interface IButtonProps {
  children: string;
  pill?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  pill,
  onClick,
  className,
}) => {
  return (
    <button
      className={`${pill ? "rounded-[100px]" : "rounded-[10px]"} ${
        className ? className : " "
      } bg-[#2A9EF4] py-2 px-6 md:py-4 md:px-12 text-sm md:text-md text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A9EF4]`}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
};

export default Button;
