import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import CollabSection from "../section/collab/collab";
import JourneySection from "../section/journey";
import DefaultLayout from "../layouts/defaultLayout";
import OurMissionSection from "../section/ourMission";
import OurValueSection from "../section/ourValue";

const AboutUs: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <JourneySection />
      <OurMissionSection />
      <OurValueSection />
      <CollabSection
        text="Wool can help your business thrive. Let's work together"
        buttonText="Call Admin"
      />
    </DefaultLayout>
  );
};

export default AboutUs;

export const Head: HeadFC = () => <title>About Us</title>;
