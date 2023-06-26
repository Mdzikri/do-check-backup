import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AboutUs: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Footer />
    </main>
  );
};

export default AboutUs;

export const Head: HeadFC = () => <title>Tentang Kami</title>;
