import React, { useCallback, useState } from "react";
import { Link } from "gatsby";
import Logo from "../../assets/images/logo-navbar.png";

export default function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState([
    {
      id: 0,
      title: "Beranda",
      href: "/",
      isActive: true,
    },
    {
      id: 1,
      title: "Tentang Kami",
      href: "/tentang-kami",
      isActive: false,
    },
    {
      id: 2,
      title: "Wool for Company",
      href: "/wool-for-company",
      isActive: false,
    },
  ]);

  const navbarHandler = useCallback(
    (id: number) => {
      setActiveNavbar(
        activeNavbar.map((item) => {
          item.isActive = false;
          if (item.id === id) item.isActive = true;
          return item;
        })
      );
    },
    [setActiveNavbar]
  );

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <div>
              <img className="h-11 w-auto" src={Logo} alt="logo" />
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
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {activeNavbar.map((item, idx) => (
            <Link
              onClick={() => navbarHandler(item.id)}
              key={idx}
              to={item.href}
            >
              <span
                className={`text-sm font-semibold leading-6 ${
                  item.isActive ? "text-[#2A9EF4]" : "text-gray-900"
                } hover:text-[#2A9EF4]`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
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
