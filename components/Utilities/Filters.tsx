import React, { useState } from "react";
import LabelFilter from "./LabelFilter";
import UserFilter from "./UserFilter";

const Filters = () => {
  const [filterToBeRendered, setFilterToBeRendered] = useState<
    "label" | "user" | ""
  >("");
  const renderFilter = () => {
    switch (filterToBeRendered) {
      case "label":
        return <LabelFilter />;
      case "user":
        return <UserFilter />;
      default:
        return;
    }
  };

  return (
    <div className="flex flex-col items-stretch justify-start ">
      <button
        className={`text-xs font-semibold border border-gray-500 p-2 hover:bg-blue-400`}
        onClick={() => setFilterToBeRendered("label")}
      >
        Filter by Label
      </button>
      <button
        className={`text-xs font-semibold border border-gray-500 p-2 hover:bg-blue-400`}
        onClick={() => setFilterToBeRendered("user")}
      >
        Filter by User
      </button>
      <button
        className={`text-xs font-semibold border border-gray-500 p-2 hover:bg-blue-400`}
        onClick={() => setFilterToBeRendered("")}
      >
        Hide Filters
      </button>

      <div
        className={`${
          filterToBeRendered ? "" : "hidden"
        } overflow-auto h-auto max-h-96 w-full relative `}
      >
        {renderFilter()}
      </div>
    </div>
  );
};

export default Filters;
