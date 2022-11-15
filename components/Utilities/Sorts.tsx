import React from "react";
import { useDataContext, useUtilityContext } from "../../contexts/contexts";

const Sorts = () => {
  const { displayableIssues, setDisplayableIssues } = useDataContext();
  const { sortByCreation, sortByState } = useUtilityContext();

  return (
    <>
      <button
        onClick={() => setDisplayableIssues(sortByCreation(displayableIssues))}
        className={`text-xs font-semibold border border-gray-500 p-2 hover:bg-blue-400`}
      >
        Sort By Date
      </button>
      <button
        onClick={() => setDisplayableIssues(sortByState(displayableIssues))}
        className={`text-xs font-semibold border border-gray-500 p-2 hover:bg-blue-400`}
      >
        Sort By State
      </button>
    </>
  );
};

export default Sorts;
