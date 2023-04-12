import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Us from "../assets/images/us.webp";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HeroSecondary from "../components/hero/secondary";
import Timeline from "../components/timeline";
import OurMission from "../components/ourMission";

const AboutUs: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <HeroSecondary />
      <Timeline />

      <OurMission />
      <h3 className="text-4xl text-center font-bold px-24">Our Team</h3>
      <img
        src={Us}
        alt="us"
        className="w-11/12 rounded-xl m-auto mb-10 mt-10"
      />
      <Footer withContactAdmin />
    </main>
  );
};

export default AboutUs;

export const Head: HeadFC = () => <title>Tentang Kami</title>;
