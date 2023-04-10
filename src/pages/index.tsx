import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Provide from "../components/provide";

import "tw-elements";
import News from "../components/news";
import CoachSay from "../components/coachSay";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Provide />
      <News />
      <CoachSay />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
