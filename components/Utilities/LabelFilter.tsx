import React from "react";
import { useDataContext } from "../../contexts/contexts";

const LabelFilter = () => {
  const {
    labels,
    clearFilters,
    toggleLabelFromSelection,
    selectedLabels,
    displayableIssues,
  } = useDataContext();

  /**
   * Converts labels to buttons.
   * @returns button[]
   */
  const renderLabels = () => {
    return labels.map((i) => {
      return (
        <button
          style={{
            color: `#${i.color}`,
          }}
          className={`p-1 border text-xs inline ${
            selectedLabels.includes(i.id) ? "bg-blue-100 dark:bg-gray-600" : ""
          }`}
          onClick={() => toggleLabelFromSelection(i.id)}
          key={i.name}
        >
          {i.name}
        </button>
      );
    });
  };
  return (
    <div className="flex flex-col items-stretch justify-between">
      <div className="flex flex-row items-center justify-evenly sticky top-0 bg-gray-50 dark:bg-gray-900 mx-2">
        <span className="text-xs">{selectedLabels.length} labels selected</span>
        <span className="text-xs">{displayableIssues.length} issues found</span>
        <button onClick={clearFilters}>Clear</button>
      </div>
      <div className="h-auto block mx-4">{renderLabels()}</div>
    </div>
  );
};

export default LabelFilter;
