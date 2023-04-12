import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HeroAlternate from "../components/hero/alternate";
import OurFeature from "../components/ourFeature";
import Toolkit from "../components/toolkit";
import Personalize from "../components/personalized";
import WhyUs from "../components/whyUs";
import Productivity from "../components/productivity";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <main>
      <Navbar location={location.pathname} />
      <HeroAlternate />
      <OurFeature />
      <Toolkit />
      <Personalize />
      <WhyUs />
      <Productivity />
      <Footer withContactAdmin />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wool For Company</title>;
