import React, { useState } from "react";
import UtilityToolBar from "../Utilities/UtilityToolBar";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const ToolBarMenu = () => {
  const [expandToolBar, setExpandToolBar] = useState<boolean>(false);
  return (
    <div
      className={`fixed md:sticky h-screen z-50 ${
        expandToolBar
          ? "left-0 top-0 w-4/5 md:w-2/5 mx-2 bg-gray-50 dark:bg-gray-900"
          : "top-2 left-2 text-3xl rounded-full m-2"
      }  `}
    >
      <button
        onClick={() => setExpandToolBar(!expandToolBar)}
        className="sticky md:absolute top-2 left-0 text-3xl border p-2 rounded-full"
      >
        {expandToolBar ? <HiX /> : <HiOutlineMenu />}
      </button>
      <div className={`${expandToolBar ? "" : "hidden"}`}>
        <UtilityToolBar />
      </div>
    </div>
  );
};

export default ToolBarMenu;
