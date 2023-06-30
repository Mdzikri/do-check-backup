import React from "react";
import { IPricingUserCount } from "../../../interface/pricing.interface";
import "./style.scss";
import {
  thousandFormatter,
  thousandSeparator,
} from "../../../helper/numbering.helper";

interface PricingCardProps {
  image?: string;
  name: string;
  total_user?: IPricingUserCount;
  price?: number | null;
  denomination?: string | null;
  content: JSX.Element | React.ReactNode;
  isPopular: boolean;
  footer?: JSX.Element | React.ReactNode;
}

const PricingCard: React.FC<PricingCardProps> = ({
  image,
  name,
  total_user,
  price,
  denomination,
  content,
  isPopular,
  footer,
}) => {
  return (
    <div className={`${isPopular ? "pricing-card-popular" : "pricing-card"}`}>
      {isPopular && <div className="popular-header">Most Popular</div>}
      <div className="pricing-card-wrapper">
        {image && (
          <div className="pricing-card-image">
            <img src={image} alt={name} />
          </div>
        )}
        <h4 className={`pricing-name ${price ? "mb-0" : "mb-10"}`}>{name}</h4>
        {total_user && (
          <div className="pricing-user-count">
            ({thousandSeparator(total_user.lowest)} {total_user.operator}{" "}
            {thousandSeparator(total_user.highest)})
          </div>
        )}
        {price && (
          <div className="flex justify-around items-center py-2 md:py-5">
            <span className="pricing-price">Rp {thousandFormatter(price)}</span>
            <span className="pricing-type">/{denomination}</span>
          </div>
        )}
        {content}
      </div>
      {footer && <div>{footer}</div>}
    </div>
  );
};

export default PricingCard;
