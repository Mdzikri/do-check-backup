import React, { useMemo } from "react";

import Employee from "../../assets/images/mobile.png";
import User from "../../assets/images/user.png";
import Connection from "../../assets/images/connection.png";
import CleanCode from "../../assets/images/user-green.png";
import useData from "../../hooks/useData";
import OurFeatureCard from "../../components/card/ourFeature";

const staticImage = [Employee, User, Connection, CleanCode];

export default function OurFeature() {
  const { data } = useData();

  const featureSecondItem = useMemo(
    () =>
      data?.featureSecondItem?.map((item, idx) => ({
        ...item,
        icon: staticImage[idx],
      })),
    [data]
  );

  return (
    <div className="lg:flex md:grid md:grid-cols-2 md:gap-5 py-24 h-full items-stretch px-14 2xl:px-36 m-auto">
      {featureSecondItem?.map(({ color, icon, title, value }, idx) => (
        <OurFeatureCard
          src={icon}
          title={title}
          value={value}
          color={color}
          key={idx}
        />
      ))}
    </div>
  );
}
