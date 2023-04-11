import React from "react";
import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <div className="logo flex items-center md:ml-7">
      <img draggable="false" className="max-w-[125px]" alt="logo" src={logo} />
    </div>
  );
}
