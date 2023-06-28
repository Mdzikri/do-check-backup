import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import DefaultLayout from "../layouts/defaultLayout";
import HeroAlternate from "../section/hero/alternate";
import ProblemSection from "../section/problem";
import FactorSection from "../section/factor";
import OurGoalSection from "../section/ourGoal";
import WoolFeatureSection from "../section/woolFeature";
import OurStepSection from "../section/ourStep";
import MeetCoachSection from "../section/meetCoach";
import CollabSection from "../section/collab/collab";
import FaqSection from "../section/faq";
import PlanSection from "../section/plan";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <HeroAlternate />
      <ProblemSection />
      <FactorSection />
      <OurGoalSection />
      <WoolFeatureSection />
      <OurStepSection />
      <MeetCoachSection />
      <PlanSection />
      <CollabSection
        buttonText="Request FREE Demo"
        text="Collaborate with Wool, allow people to contribute their best!"
        action={() =>
          (window.location.href = `https://wa.me/${process.env.WA_PHONE_NUMBER}`)
        }
      />
      <FaqSection />
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wool - ID</title>;
