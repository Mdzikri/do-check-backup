import React from "react";
import Button from "../../components/button/button";
import ArrowRightIcon from "../../assets/images/icons/arrow-right-icon.png";

interface CollabSectionProps {
  action?: () => void;
  buttonText?: string;
  text?: string;
}

const CollabSection: React.FC<CollabSectionProps> = ({
  action,
  buttonText,
  text,
}) => {

  return (
    <section id="section-collab" className="px-10 md:px-32">
      <div className="bg-[#fff] flex flex-col justify-center items-center shadow-lg py-10 px-5 rounded-[30px] drop-shadow-xl">
        <h2 className="text-[22px] text-black font-bold">{text}</h2>
        <Button
          icon={ArrowRightIcon}
          className="mt-10"
          onClick={action}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CollabSection;
