import { Link } from "gatsby";
import { isEqual, size } from "lodash";
import React, { useCallback, useEffect, useState } from "react";

import Logo from "../../assets/images/logo-blue.png";
import {
  ActiveNavbarKeys,
  INavbarHandler,
} from "../../interface/global.interface";
import Button from "../button/button";
import Lang from "../lang";

export default function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState([
    {
      id: 0,
      title: "Home Page",
      href: "/en/",
      isActive: true,
    },
    {
      id: 1,
      title: "About Us",
      href: "/en/about-us",
      isActive: false,
    },
  ]);

  console.log('Test Automation')

  const navbarHandler: INavbarHandler<ActiveNavbarKeys> = useCallback(
    (key, other) =>
      setActiveNavbar(
        activeNavbar.map((item) => {
          item.isActive = false;
          if (isEqual(item[key], other)) item.isActive = true;
          return item;
        })
      ),
    [isEqual, activeNavbar, setActiveNavbar]
  );

  useEffect(() => {
    const location = window.location.pathname;
    const path = location.substring(0, size(location) - 1);

    if (location && path) navbarHandler("href", path);
    else navbarHandler("id", 0);
  }, []);

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
          {activeNavbar.map((item) => {
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

      {/* <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-10 w-auto" src={Logo} alt="logo" />
            </a>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {activeNavbar.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      item.isActive ? "text-[#2A9EF4]" : "text-gray-900"
                    } hover:bg-gray-50 hover:text-[#2A9EF4]`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Close Menu <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}
