import { Link } from "gatsby";
import React, { useState } from "react";

import Logo from "../../assets/images/logo-blue.png";
import CloseIcon from "../../assets/images/icons/close-icon.svg";
import Button from "../button/button";
import Lang from "../lang";

export default function Navbar() {
  const [lang, setLang] = useState<string>("en");
  const [openMobile, setOpenMobile] = useState<boolean>(false);
  const navbarItem = [
    {
      id: 0,
      title: "Home Page",
      href: `/${lang}/`,
      isActive: false,
    },
    {
      id: 1,
      title: "About Us",
      href: `/${lang}/about-us`,
      isActive: false,
    },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <div>
              <img
                className="h-11 2xl:h-16 w-auto"
                src={Logo}
                alt="logo"
                placeholder="blur"
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setOpenMobile(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-12">
          {navbarItem.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.href}
                activeClassName="text-wool-blue font-semibold"
                className="text-[#3e3e3e] hover:text-wool-blue"
              >
                {item.title}
              </Link>
            );
          })}
          <Button>Login</Button>
          <Lang />
        </div>
      </nav>

      <div
        className={`lg:hidden ${openMobile ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <div>
                <img
                  className="h-11 2xl:h-16 w-auto"
                  src={Logo}
                  alt="logo"
                  placeholder="blur"
                />
              </div>
            </Link>
            <div>
              <img
                src={CloseIcon}
                alt="close"
                onClick={() => setOpenMobile(false)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            {navbarItem.map((item, idx) => (
              <div key={idx} className="py-5 border-b-2 border-wool-background-secondary w-full text-center">
                <Link
                  to={item.href}
                  className="text-[#3e3e3e] hover:text-wool-blue font-bold"
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <div className="py-5">
              <Button onClick={() => setOpenMobile(false)}>Log In</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
