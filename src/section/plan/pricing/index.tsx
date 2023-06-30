import React from "react";
import PricingCard from "../../../components/card/pricingCard";
import { IPricing } from "../../../interface/pricing.interface";
import { pricingFeaturesData } from "../../../dummy/pricing";
import FeatureList from "../../../components/featuresList";
import Switch from "../../../components/switch";
import Button from "../../../components/button/button";

interface PricingSectionProps {
  datas: IPricing[];
  isYearly: boolean;
  changeType: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  datas,
  isYearly,
  changeType,
}) => {
  const pricingContent = (active_features_id: number[]) => {
    return pricingFeaturesData.map((feature) => (
      <FeatureList
        isActive={active_features_id.includes(feature.id)}
        text={feature.text}
      />
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-2 md:mt-10">
        <Switch
          id="times"
          leftLabel="Monthly"
          rightLabel="Yearly"
          checked={isYearly}
          onChange={changeType}
        />
      </div>
      <h2 className="font-bold text-[16px] md:text-[24px] text-wool-neutral-100 mt-2 md:mt-10">
        Select Investment Plan ({isYearly ? "Yearly" : "Monthly"})
      </h2>
      <div className="md:flex items-center md:space-around py-10 md:py-20">
        {datas.map((data) => {
          return (
            <PricingCard
              key={data.id}
              name={data.name}
              total_user={data.user_count}
              price={data.price}
              denomination={data.denomination}
              isPopular={data.isPopular}
              content={pricingContent(data.active_features_id)}
              footer={
                <Button
                  onClick={() =>
                    window.open(
                      `https://wa.me/${process.env.WA_PHONE_NUMBER}`,
                      "_blank"
                    )
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

export default PricingSection;
