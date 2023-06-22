import React from "react";
import WoolLogo from "../../assets/images/logo-blue.png";
import { contactData } from "../../dummy/contact";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#d4ecfd] relative mt-20 px-10 md:px-32 py-10 md:py-20">
        <div className="md:flex">
          <div className="md:w-[33%]">
            <div className="w-[200px]">
              <img src={WoolLogo} alt="We open our lives" />
            </div>
            <span className="block my-5 text-[#3e3e3e] font-bold text-[18px]">
              Let's Find A Solution To Your Problem
            </span>
            <span className="block my-5 text-[#3e3e3e] text-[14px]">
              {contactData.address}
            </span>
          </div>
          <div className="md:w-[33%] md:pl-20">
            <span className="font-bold">Navigation</span>
            <ul className="md:pt-10 text-[#3e3e3e]">
              <li className="my-2">
                <a href="">About Us</a>
              </li>
              <li className="my-2">
                <a href="">Wool For Company</a>
              </li>
              <li className="my-2">
                <a href="">Join as a Coach</a>
              </li>
            </ul>
          </div>
          <div className="md:w-[33%] md:pl-20">
            <span className="font-bold">Business & Cooperation</span>
            <ul className="md:pt-10 text-[#3e3e3e] font-bold">
              <li className="my-2">
                <a href="">{contactData.phone}</a>
              </li>
              <li className="my-2">
                <a href="">{contactData.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
