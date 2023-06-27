import React, { useEffect } from "react";
import WoolLogo from "../../assets/images/logo-blue.png";
import PhoneIcon from "../../assets/images/icons/phone-icon.png";
import LetterIcon from "../../assets/images/icons/letter-icon.png";
import { contactData } from "../../dummy/contact";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="bg-[#d4ecfd] relative mt-20 px-10 md:px-32 pt-5 md:pt-20">
      <div className="md:flex">
        <div className="md:w-[33%]">
          <div className="w-[200px]">
            <img src={WoolLogo} alt="We open our lives" placeholder="blur" />
          </div>
          <span className="block my-5 text-[#3e3e3e] font-bold text-[18px]">
            Let's Find A Solution To Your Problem
          </span>
          <span className="block my-5 text-[#3e3e3e] text-[16px]">
            {contactData.address}
          </span>
        </div>
        <div className="md:w-[33%] md:pl-20">
          <span className="font-bold">Navigation</span>
          <ul className="md:pt-10 text-[#3e3e3e]">
            <li className="my-2">
              <Link target="_blank" to="/en/about-us">About Us</Link>
            </li>
            <li className="my-2">
              <a href="#">Wool For Company</a>
            </li>
            <li className="my-2">
              <a target="_blank" href={`https://wa.me/${process.env.WA_PHONE_NUMBER}`}>Join as a Coach</a>
            </li>
          </ul>
        </div>
        <div className="md:w-[33%] md:pl-20">
          <span className="font-bold">Business & Cooperation</span>
          <ul className="md:pt-10 text-[#3e3e3e]">
            <li className="my-2">
              <a
                target="_blank"
                href={`https://wa.me/${process.env.WA_PHONE_NUMBER}`}
                className="flex items-center"
              >
                <img
                  className="w-[20px] mr-2"
                  src={PhoneIcon}
                  alt="Phone Icon"
                  placeholder="blur"
                />{" "}
                {contactData.phone}
              </a>
            </li>
            <li className="my-2">
              <a target="_blank" href="#" className="flex items-center">
                <img
                  className="w-[20px] mr-2"
                  src={LetterIcon}
                  alt="Letter Icon"
                  placeholder="blur"
                />
                {contactData.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center pt-4 pb-4 border-t-2 font-[14px] border-[#b2b2b2]">
        <h4>&#169; 2023 Healing, All Right Reserved</h4>
      </div>
    </footer>
  );
}
