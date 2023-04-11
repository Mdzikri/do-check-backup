import React from "react";

import Checkup from "../../assets/images/checkup.png";
import LadySad from "../../assets/images/lady.png";

const itemStatic = [
  "Depression",
  "Trauma & grief",
  "Chronic illness",
  "Anxiety & stress",
  "Anger",
  "Productivity",
  "Relationships",
  "Sleep",
  "And more...",
];

export default function Personalize() {
  return (
    <div className="flex items-center px-24 mt-24 mb-24">
      <img className="w-5/6" draggable={false} src={LadySad} alt="lady-sad" />
      <div className="wrapper">
        <h3 className="font-bold text-3xl mb-8">Personalised Care for All</h3>
        <p className="text-lg w-4/5">
          Your comfort is our priority. With the support of the Wool team, we’ll
          do our best to ensure that your wellness journey is smooth, secure and
          centered around you.
        </p>
        <div className="grid grid-cols-3 w-5/6 gap-3 mt-7">
          {itemStatic.map((item, idx) => (
            <div className="flex items-center" key={idx}>
              <img className="w-6 h-6" draggable={false} src={Checkup} alt="checkup" />
              <span className="ml-2 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
