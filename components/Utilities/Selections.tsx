import React from "react";
import { useDataContext, useUtilityContext } from "../../contexts/contexts";

const Selections = () => {
  const { displayableIssues } = useDataContext();
  const {
    displaySelection,
    hideSelection,
    selectedIssues,
    toggleAllSelection,
  } = useUtilityContext();
  return (
    <>
      <label className="flex flex-col items-center justify-center cursor-pointer">
        Select All
        <input
          type="checkbox"
          checked={selectedIssues.length === displayableIssues.length}
          onChange={() => toggleAllSelection(displayableIssues)}
        />
        <span className="tet-xs">
          {selectedIssues.length > 0
            ? `${selectedIssues.length} items selected`
            : "No items selected"}
        </span>
      </label>
      <button
        disabled={selectedIssues.length === 0}
        className={`text-xs font-semibold border border-gray-500 p-2 hover:bg-blue-400 disabled:opacity-30 disabled:hover:bg-gray-400 disabled:cursor-not-allowed`}
        onClick={displaySelection}
      >
        Display Details
      </button>
      <button
        disabled={selectedIssues.length === 0}
        className={`text-xs font-semibold border border-gray-500 p-2 hover:bg-blue-400 disabled:opacity-30 disabled:hover:bg-gray-400 disabled:cursor-not-allowed`}
        onClick={hideSelection}
      >
        Hide Details
      </button>
    </>
  );
};

export default Selections;
