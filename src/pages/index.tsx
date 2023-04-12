import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "tw-elements/dist/css/index.min.css";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Provide from "../components/provide";
import Us from "../components/us";

import News from "../components/news";
import CoachSay from "../components/coachSay";
import Feature from "../components/feature";

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
