import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HeroAlternate from "../components/hero/alternate";
import OurFeature from "../components/ourFeature";
import Toolkit from "../components/toolkit";
import Personalize from "../components/personalized";
import WhyUs from "../components/whyUs";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <HeroAlternate />
      <OurFeature />
      <Toolkit />
      <Personalize />
      <WhyUs />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wool For Company</title>;
