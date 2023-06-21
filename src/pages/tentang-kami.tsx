import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HeroSecondary from "../section/hero/secondary";
import Timeline from "../section/timeline";
import OurMission from "../section/ourMission";
import OurTeam from "../section/ourTeam";

const AboutUs: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <HeroSecondary />
      <Timeline />
      <OurMission />
      <OurTeam />
      <Footer withContactAdmin />
    </main>
  );
};

export default AboutUs;

export const Head: HeadFC = () => <title>Tentang Kami</title>;
