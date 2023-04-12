import React from "react";
import SitemapFooterMain from "./sitemapFooterMain";

import Logo from "../logo";
import UnionFooter from "../../assets/images/union-bottom.png";
import Hug from "../../assets/images/hug.png";
import { If } from "react-if";

interface FooterProps {
  withContactAdmin?: boolean;
}

export default function Footer({ withContactAdmin }: FooterProps) {
  return (
    <>
      <If condition={withContactAdmin}>
        <div className="flex items-center justify-center z-53 px-24 flex-col mb-20">
          <img
            src={Hug}
            className="lg:w-5/12 md:w-2/3 "
            draggable={false}
            alt="contact-admin"
          />
          <h3 className="font-bold lg:text-3xl md:text-xl lg:max-w-md mb-10">
            Wool can help your business thrive. Let's work together.
          </h3>
          <a
            href="#"
            className="rounded-[100px] bg-[#2A9EF4] lg:pt-3 md:pt-2 lg:pb-3 md:pb-2 lg:pl-10 md:pl-5 lg:pr-10 md:pr-5 text-lg text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 lg:text-base md:text-sm focus-visible:outline-offset-2 focus-visible:outline-[#2A9EF4]"
          >
            Hubungi Admin
          </a>
        </div>
      </If>
      <footer className="bg-[#2A9EF4] relative">
        <div className="w-full mx-auto max-w-screen-xl z-50 p-4 md:flex md:items-start md:justify-between">
          <div className="md:flex flex-col mt-16">
            <div className="mb-6">
              <Logo />
            </div>
            <span className="text-sm text-white mb-3 md:w-[305px] sm:text-left">
              Let's Find A Solution To Your Problem
            </span>
            <span className="text-sm text-white sm:text-left ">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Wool
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <SitemapFooterMain />
        </div>
        <img
          draggable="false"
          className="absolute  md:overflow-hidden md:bottom-96 lg:bottom-20 -z-10"
          alt="union-footer"
          src={UnionFooter}
        />
      </footer>
    </>
  );
}
