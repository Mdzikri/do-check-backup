import React, { useCallback } from "react";
import { changeLocale } from "gatsby-plugin-react-intl";

export default function Lang() {
  const changeLangHandler = useCallback(
    (lang: "en" | "id") => {
      alert("This Feature were currently under development");
      changeLocale(lang);
    },
    [changeLocale]
  );

  return (
    <div className="lang flex items-center">
      <span
        className="cursor-pointer pr-2 border-r border-[#7a7a7a]"
        onClick={() => changeLangHandler("id")}
      >
        ID
      </span>
      <span
        className="font-bold text-wool-blue cursor-pointer pl-2 border-l border-[#7a7a7a]"
        onClick={() => changeLangHandler("en")}
      >
        EN
      </span>
    </div>
  );
}
