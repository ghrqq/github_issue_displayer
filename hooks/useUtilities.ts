import { useState } from "react";
import { Issue_Node } from "../types/globalTypes";
import { toggleItemInAList } from "./helpers";

export interface UseUtilitiesOutput {
  selectedIssues: string[];
  visibleItems: string[];
  toggleSelection: (id: string) => void;
  toggleDetailVisibility: (id: string) => void;
  hideAll: () => void;
  hideSelection: () => void;
  displaySelection: () => void;
  sortByCreation: (dataState: Issue_Node[]) => Issue_Node[];
  toggleAllSelection: (dataState: Issue_Node[]) => void;
  sortByState: (dataState: Issue_Node[]) => Issue_Node[];
  sortByDateAscending: boolean;
  sortByStateAscending: boolean;
}

export const useUtilities = (): UseUtilitiesOutput => {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [sortByDateAscending, setSortByDateAscending] = useState<boolean>(true);
  const [sortByStateAscending, setSortByStateAscending] =
    useState<boolean>(true);

  /**
   * Toggles selection for an individual Issue.
   */
  const toggleSelection = toggleItemInAList(setSelectedIssues, selectedIssues);

  /**
   * Toggles detail view for an individual Issue.
   */
  const toggleDetailVisibility = toggleItemInAList(
    setVisibleItems,
    visibleItems
  );

  const hideAll = () => {
    setVisibleItems([]);
  };
  const hideSelection = () => {
    const tempArr = [...visibleItems];

    selectedIssues.forEach((i) => {
      const idx = tempArr.indexOf(i);
      if (idx >= 0) {
        tempArr.splice(idx, 1);
      }
    });
    setVisibleItems([...tempArr]);
  };
  const displaySelection = () => {
    const tempArr = [...visibleItems];

    selectedIssues.forEach((i) => {
      const idx = tempArr.indexOf(i);
      if (idx < 0) {
        tempArr.push(i);
      }
    });
    setVisibleItems([...tempArr]);
  };

  /**
   * Helper functions for toggleAllSelection
   * @param dataState
   */
  const selectAll = (dataState: Issue_Node[]) => {
    const resultArr = dataState.map((i: Issue_Node) => i.id);
    setSelectedIssues([...resultArr]);
  };

  const clearSelection = () => {
    setSelectedIssues([]);
  };

  /**
   * Selects or deselects the whole selection list.
   * @param dataState
   */
  const toggleAllSelection = (dataState: Issue_Node[]) => {
    if (selectedIssues.length < dataState.length) {
      selectAll(dataState);
    } else {
      clearSelection();
    }
  };

  /**
   * Sorts the given data based on the createdAt field.
   * @param dataState
   * @returns ordered dataState
   */
  const sortByCreation = (dataState: Issue_Node[]) => {
    const tempArr = [...dataState];
    const convertTime = (str: string) => {
      return new Date(str).getTime();
    };
    if (sortByDateAscending) {
      tempArr.sort(
        (a, b) => convertTime(b.createdAt) - convertTime(a.createdAt)
      );
    } else {
      tempArr.sort(
        (a, b) => convertTime(a.createdAt) - convertTime(b.createdAt)
      );
    }
    setSortByDateAscending(!sortByDateAscending);

    return [...tempArr];
  };

  /**
   * Sorts the given data based on the state field.
   * @param dataState
   * @returns ordered dataState
   */
  const sortByState = (dataState: Issue_Node[]) => {
    const tempArr = [...dataState];

    tempArr.sort((a, b) => a.state.localeCompare(b.state));

    setSortByStateAscending(!sortByStateAscending);
    if (sortByStateAscending) {
      return [...tempArr];
    } else {
      return [...tempArr.reverse()];
    }
  };

  return {
    selectedIssues,
    visibleItems,
    toggleSelection,
    toggleDetailVisibility,
    hideAll,
    hideSelection,
    displaySelection,
    sortByCreation,
    toggleAllSelection,
    sortByState,
    sortByDateAscending,
    sortByStateAscending,
  };
};
