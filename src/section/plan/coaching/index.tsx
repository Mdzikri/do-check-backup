import React from "react";
import { ICoaching } from "../../../interface/coaching.interface";
import PricingCard from "../../../components/card/pricingCard";
import Button from "../../../components/button/button";

interface CoachingSectionProps {
  datas: ICoaching[];
}

const CoachingSection: React.FC<CoachingSectionProps> = ({ datas }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-[16px] md:text-[24px] text-wool-neutral-100 mt-2 md:mt-10">
        Life & Career Coaching Investment Fee
      </h2>
      <div className="md:flex items-center space-around py-10 md:py-20">
        {datas.map((data) => {
          return (
            <PricingCard
              key={data.id}
              image={data.icon}
              name={data.name}
              price={data.price}
              denomination={data.denomination}
              isPopular={data.isPopular}
              content={data.description}
              footer={
                <Button
                  onClick={() =>
                    window.open(`https://wa.me/${process.env.WA_PHONE_NUMBER}`, '_blank')
                  }
                >
                  Contact Us
                </Button>
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoachingSection;
