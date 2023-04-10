import React from "react";
import SitemapFooterMain from "./sitemapFooterMain";

export default function Footer() {
  return (
    <footer className="bg-[#2A9EF4]">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div className="md:flex flex-col">
          <span className="text-sm text-white mb-4 md:w-[305px] sm:text-left">
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
    </footer>
  );
}
