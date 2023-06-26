import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CollabSection from "../section/collab/collab";
import JourneySection from "../section/journey";

const AboutUs: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <JourneySection />
      <CollabSection
        text="Wool can help your business thrive. Let's work together"
        buttonText="Call Admin"
      />
      <Footer />
    </main>
  );
};

export default AboutUs;

export const Head: HeadFC = () => <title>About Us</title>;
