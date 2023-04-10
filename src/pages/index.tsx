import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Provide from "../components/provide";

import "tw-elements";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Provide />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
