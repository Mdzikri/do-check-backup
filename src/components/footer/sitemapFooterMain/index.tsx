import React from "react";

import "./style.scss";

const linkStatic = [
  {
    id: 0,
    title: "Tentang Kami",
    href: "/",
  },
  {
    id: 1,
    title: "Wool for Company",
    href: "/",
  },
  {
    id: 2,
    title: "Join as as Coach",
    href: "/",
  },
];

const contactPerson = [
  {
    id: 0,
    title: "Bisnis & kerja Sama",
    value: "+62 8122 3391 944",
  },
  {
    id: 1,
    title: "Email",
    value: "hello@wool.id",
  },
  {
    id: 2,
    title: "Alamat",
    value:
      "Jl. Abadi Raya No. 12, Gegerkalong. Kec. Sukasari, Kota Bandung, Jawa Barat 40153",
  },
];

export default function SitemapFooterMain() {
  return (
    <>
      <div className="md:grid gap-5 grid-cols-2 p-16 w-100">
        <div className="md:flex flex-col">
          {linkStatic.map(({ href, title }, idx) => (
            <a className="mt-3" key={idx} href={href}>
              <span className="text-white un">{title}</span>
            </a>
          ))}
        </div>
        <div className="md:flex flex-col max-w-[413px]">
          <h3 className="text-white mb-3">Hubungi Wool</h3>
          {contactPerson.map(({ title, value }, idx) => (
            <div key={idx} className="text-white mb-3">
              <h6 className="text-white text-[15px] mb-1">{title}</h6>
              <p className="text-white opacity-75 text-[14px]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
