import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HeroAlternate from "../section/hero/alternate";
import ProblemSection from "../section/problem";
import FactSection from "../section/fact";
import OurGoalSection from "../section/ourGoal";
import WoolFeatureSection from "../section/woolFeature";
import OurStepSection from "../section/ourStep";
import MeetCoachSection from "../section/meetCoach";
import CollabSection from "../section/collab/collab";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <HeroAlternate />
      <ProblemSection />
      <FactSection />
      <OurGoalSection />
      <WoolFeatureSection />
      <OurStepSection />
      <MeetCoachSection />
      <CollabSection />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wool For Company</title>;
