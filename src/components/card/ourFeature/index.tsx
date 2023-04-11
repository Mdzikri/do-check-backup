import React from "react";

interface OurFeatureCardProps {
  title: string;
  value: string;
  color: string;
  src: any;
}

export default function OurFeatureCard({
  title,
  value,
  color,
  src,
}: OurFeatureCardProps) {
  return (
    <a
      href="#"
      style={{
        boxShadow: "0px 8px 48px rgba(0, 0, 0, 0.08)",
      }}
      className="block mx-2 w-5/6 p-6 bg-white border-gray-200 rounded-lg hover:bg-gray-100"
    >
      <div
        style={{ background: color }}
        className={`rounded-full w-[50px] mb-4 h-[50px] flex items-center justify-center`}
      >
        <img className="scale-75" alt={title} src={src} />
      </div>
      <h5 className="mb-2 text-xl font-bold w-4/5 tracking-tight text-[#333333]">
        {title}
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {value}
      </p>
    </a>
  );
}
