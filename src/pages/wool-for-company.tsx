import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HeroAlternate from "../section/hero/alternate";
import OurFeature from "../section/ourFeature";
import Toolkit from "../section/toolkit";
import Personalize from "../section/personalized";
import WhyUs from "../section/whyUs";
import Productivity from "../section/productivity";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <HeroAlternate />
      <section className="px-36"></section>
      {/* <OurFeature />
      <Toolkit
        content="37% karyawan Indonesia mengalami gangguan kesehatan mental (stress) sehari harinya."
        reverse={true}
      />
      <Toolkit
        content="Dampak positif dari lingkungan kerja yang suportif, berkolerasi antara dukungan pada kesehatan mental di tempat kerja, level stress, serta kecemasan karyawan. Maka dari itu, penting bagi perusahaan untuk mendukung kesehatan mental para karyawannya (Gen Z & Milenial)"
        reverse={false}
      /> */}
      {/* <Personalize /> */}
      {/* <WhyUs /> */}
      {/* <Productivity /> */}
      <Footer withContactAdmin />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wool For Company</title>;
