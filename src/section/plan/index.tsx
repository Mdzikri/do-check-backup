import React, { useState } from "react";
import Title from "../../components/title";
import Tabs from "../../components/tabs";
import PricingSection from "./pricing";
import { monthlyPriceData, yearlyPriceData } from "../../dummy/pricing";
import CoachingSection from "./coaching";
import { coachingData } from "../../dummy/coaching";

const PlanSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="section-plan" className="py-10">
      <Title>Choose Your Plan</Title>
      <div className="py-20 md:px-20">
        <Tabs.Wrapper className="py-10 md:py-20">
          <Tabs.Header>
            <Tabs.NavItem
              onClick={() => setActiveTab(0)}
              isActive={activeTab === 0}
            >
              Counseling
            </Tabs.NavItem>
            <Tabs.NavItem
              onClick={() => setActiveTab(1)}
              isActive={activeTab === 1}
            >
              Coaching
            </Tabs.NavItem>
          </Tabs.Header>
          <Tabs.Content isActive={activeTab === 0}>
            <PricingSection
              datas={isYearly ? yearlyPriceData : monthlyPriceData}
              isYearly={isYearly}
              changeType={() => setIsYearly((prev) => !prev)}
            />
          </Tabs.Content>
          <Tabs.Content isActive={activeTab === 1}>
            <CoachingSection datas={coachingData} />
          </Tabs.Content>
        </Tabs.Wrapper>
      </div>
    </section>
  );
};

export default PlanSection;
