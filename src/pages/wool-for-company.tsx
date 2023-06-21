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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <HeroAlternate />
      <OurFeature />
      <Toolkit
        content="37% karyawan Indonesia mengalami gangguan kesehatan mental (stress) sehari harinya."
        reverse={true}
      />
      <Toolkit
        content="Dampak positif dari lingkungan kerja yang suportif, berkolerasi antara dukungan pada kesehatan mental di tempat kerja, level stress, serta kecemasan karyawan. Maka dari itu, penting bagi perusahaan untuk mendukung kesehatan mental para karyawannya (Gen Z & Milenial)"
        reverse={false}
      />
      {/* <Personalize /> */}
      <WhyUs />
      <Productivity />
      <Footer withContactAdmin />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wool For Company</title>;
