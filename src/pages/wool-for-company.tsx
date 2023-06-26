import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HeroAlternate from "../section/hero/alternate";
import ProblemSection from "../section/problem";
import OurGoalSection from "../section/ourGoal";
import WoolFeatureSection from "../section/woolFeature";
import OurStepSection from "../section/ourStep";
import MeetCoachSection from "../section/meetCoach";
import CollabSection from "../section/collab/collab";
import FactorSection from "../section/factor";
import FaqSection from "../section/faq";
import DefaultLayout from "../layouts/defaultLayout";

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
      <CollabSection
        buttonText="Request FREE Demo"
        text="Collaborate with Wool, allow people to contribute their best!"
      />
      <FaqSection />
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wool For Company</title>;
