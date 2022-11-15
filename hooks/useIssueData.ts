import { useEffect, useState } from "react";
import {
  GitHub_Labels,
  GitHub_Label_Node,
  Issue_Node,
  Data,
  GitHub_Author,
} from "../types/globalTypes";
import {
  countIssuesByState,
  extractIndividualLabels,
  extractIndividualUsers,
  toggleItemInAList,
} from "./helpers";

export interface UseIssueDataOutput {
  dataState: Issue_Node[];
  setDataState: (data: Issue_Node[]) => void;
  labels: GitHub_Label_Node[];
  users: GitHub_Author[];
  initialiseData: (data: Data["data"]) => void;
  displayableIssues: Issue_Node[];
  setDisplayableIssues: (data: Issue_Node[]) => void;
  clearFilters: () => void;
  selectedLabels: string[];
  toggleLabelFromSelection: (labelId: string) => void;
  selectedUsers: string[];
  toggleUserFromSelection: (labelId: string) => void;
  openIssuesCount: number;
  closedIssuesCount: number;
  existingOpenIssuesCount: number;
  existingClosedIssuesCount: number;
}

export const useIssueData = (): UseIssueDataOutput => {
  const [dataState, setDataState] = useState<Issue_Node[]>([]);
  const [labels, setLabels] = useState<GitHub_Label_Node[]>([]);
  const [displayableIssues, setDisplayableIssues] = useState<Issue_Node[]>([]);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [users, setUsers] = useState<GitHub_Author[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [openIssuesCount, setOpenIssuesCount] = useState<number>(0);
  const [closedIssuesCount, setClosedIssuesCount] = useState<number>(0);
  const [existingOpenIssuesCount, setExistingOpenIssuesCount] =
    useState<number>(0);
  const [existingClosedIssuesCount, setExistingClosedIssuesCount] =
    useState<number>(0);

  /**
   * Initialises the data and triggers extraction functions to prepare the data.
   * @param data
   * @returns
   */
  const initialiseData = (data: Data["data"]) => {
    if (!data) {
      return;
    }
    const issueNodes = data.repository.issues.nodes.map((i: any) => i);
    setOpenIssuesCount(data.repository.open.totalCount);
    setClosedIssuesCount(data.repository.closed.totalCount);
    const result = countIssuesByState(issueNodes);
    setExistingClosedIssuesCount(result.closed);
    setExistingOpenIssuesCount(result.open);
    extractIndividualLabels(issueNodes, setLabels);
    extractIndividualUsers(issueNodes, setUsers);
    setDataState([...issueNodes]);
    setDisplayableIssues([...issueNodes]);
  };

  const clearFilters = () => {
    setDisplayableIssues(dataState);
    setSelectedLabels([]);
    setSelectedUsers([]);
  };

  const filterByLabels = () => {
    const filterResult: Issue_Node[] = [];
    dataState.forEach((i) => {
      i.labels.nodes.forEach((j) => {
        if (selectedLabels.includes(j.id) && filterResult.indexOf(i) < 0) {
          filterResult.push(i);
        }
      });
    });
    setDisplayableIssues([...filterResult]);
  };
  const filterByUsers = () => {
    const filterResult: Issue_Node[] = dataState.filter((i) =>
      selectedUsers.includes(i.author?.login)
    );
    setDisplayableIssues([...filterResult]);
  };

  /**
   * Returns a function that accepts only identifier of item.
   * If the item exists in the given list it removes. Else it adds the item to the list.
   */
  const toggleUserFromSelection = toggleItemInAList(
    setSelectedUsers,
    selectedUsers
  );
  const toggleLabelFromSelection = toggleItemInAList(
    setSelectedLabels,
    selectedLabels
  );

  /**
   * Checks if displayables should be updated based on the label selection changes.
   */
  useEffect(() => {
    if (!dataState) {
      return;
    }
    if (selectedLabels.length === 0) {
      setDisplayableIssues(dataState);
      return;
    }

    filterByLabels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLabels, dataState]);
  /**
   * Checks if displayables should be updated based on the user selection changes.
   */
  useEffect(() => {
    if (!dataState) {
      return;
    }
    if (selectedUsers.length === 0) {
      setDisplayableIssues(dataState);
      return;
    }

    filterByUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataState, selectedUsers]);

  return {
    dataState,
    setDataState,
    labels,
    initialiseData,
    displayableIssues,
    setDisplayableIssues,
    clearFilters,
    selectedLabels,
    toggleLabelFromSelection,
    selectedUsers,
    toggleUserFromSelection,
    users,
    closedIssuesCount,
    existingClosedIssuesCount,
    existingOpenIssuesCount,
    openIssuesCount,
  };
};
