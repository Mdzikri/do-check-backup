import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HeroSecondary from "../components/hero/secondary";
import Timeline from "../components/timeline";
import OurMission from "../components/ourMission";
import OurTeam from "../components/ourTeam";

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
