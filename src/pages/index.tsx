import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../section/hero";
import Provide from "../section/provide";
import Us from "../section/us";

import News from "../section/news";
import CoachSay from "../section/coachSay";
import Feature from "../section/feature";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature />
      <Us />
      <Provide />
      <News />
      <CoachSay />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
