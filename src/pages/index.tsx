import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Wool - ID</title>;
