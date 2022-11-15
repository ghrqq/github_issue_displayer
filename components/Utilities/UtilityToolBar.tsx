import React from "react";
import Filters from "./Filters";
import Selections from "./Selections";
import Sorts from "./Sorts";
import { useDataContext } from "../../contexts/contexts";

const UtilityToolBar = () => {
  const {
    openIssuesCount,
    closedIssuesCount,
    existingClosedIssuesCount,
    existingOpenIssuesCount,
  } = useDataContext();
  return (
    <div className="flex flex-col items-stretch justify-between h-auto mt-16 ">
      <div className="text-center mx-auto border-b">
        Open Issues: {existingOpenIssuesCount}/{openIssuesCount}
        <br />
        Closed Issues: {existingClosedIssuesCount}/{closedIssuesCount}
        <br />
        Total Issues: {existingClosedIssuesCount + existingOpenIssuesCount}/
        {openIssuesCount + closedIssuesCount}
      </div>
      <Selections />
      <Sorts />
      <Filters />
    </div>
  );
};

export default UtilityToolBar;
