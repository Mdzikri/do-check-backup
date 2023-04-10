import React from "react";
import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <div className="logo flex items-center md:ml-7">
      <img className="max-w-[170px]" alt="logo" src={logo} />
    </div>
  );
}
