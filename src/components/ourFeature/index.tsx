import React from "react";

import Employee from "../../assets/images/mobile.png";
import User from "../../assets/images/user.png";
import Connection from "../../assets/images/connection.png";
import CleanCode from "../../assets/images/user-green.png";
import OurFeatureCard from "../card/ourFeature";

const staticFeature = [
  {
    id: 0,
    title: "Karyawan Tidak Produktif",
    value:
      "Riset dari Gallup, Inc. melaporkan bahwa 76% karyawan di Indonesia tidak termotivasi dengan pekerjaan mereka",
    color: "#FEF1D8",
    icon: Employee,
  },
  {
    id: 1,
    title: "Karyawan Cenderung Absen",
    value:
      "Masalah kesehatan mental menyebabkan masing-masing karyawan kehilangan 27 hari kerja per tahun",
    color: "#E5DEFD",
    icon: User,
  },
  {
    id: 2,
    title: "Well Organized",
    value: "And if she hasn’t been rewritten, then they are still using her.",
    color: "#FBE0C7",
    icon: Connection,
  },
  {
    id: 3,
    title: "Clean Code",
    value: "Copy Writers ambushed her, made her drunk with Longe and Parole.",
    color: "#BCF8D5",
    icon: CleanCode,
  },
];

export default function OurFeature() {
  return (
    <div className="flex lg:py-24 h-full items-stretch px-14 m-auto">
      {staticFeature.map(({ color, icon, title, value }, idx) => (
        <OurFeatureCard
          src={icon}
          title={title}
          value={value}
          color={color}
          key={idx}
        />
      ))}
    </div>
  );
}
