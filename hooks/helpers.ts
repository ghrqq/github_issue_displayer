import {
  GitHub_Author,
  GitHub_Label_Node,
  Issue_Node,
} from "../types/globalTypes";

/**
 * Extracts unique labels from the given array and sets the labels by triggering the callback.
 * @param issueNodes
 * @param setLabels
 */
export const extractIndividualLabels = (
  issueNodes: Issue_Node[],
  setLabels: (labels: GitHub_Label_Node[]) => void
) => {
  const labels: GitHub_Label_Node[][] = issueNodes.map((i) => i.labels.nodes);
  const extractedLabels: GitHub_Label_Node[] = [];
  labels.forEach((i) => {
    i.forEach((j) => {
      if (!extractedLabels.includes(j)) {
        extractedLabels.push(j);
      }
    });
  });
  setLabels(extractedLabels);
};

/**
 * Extracts unique users from the given array and sets the users by triggering the callback.
 * @param issueNodes
 * @param setUsers
 */
export const extractIndividualUsers = (
  issueNodes: Issue_Node[],
  setUsers: (users: GitHub_Author[]) => void
) => {
  const tempUsers: GitHub_Author[] = issueNodes.map((i) => i.author);
  const result = [];
  const map = new Map();
  for (const item of tempUsers) {
    if (!map.has(item?.login)) {
      map.set(item?.login, true); // set any value to Map
      result.push({
        ...item,
      });
    }
  }
  setUsers(result);
};

/**
 * Counts the issues by their state
 * @param issueNodes
 * @returns
 */
export const countIssuesByState = (
  issueNodes: Issue_Node[]
): { open: number; closed: number } => {
  const states = issueNodes.map((i) => i.state);
  let open = 0;
  let closed = 0;
  states.forEach((i) => {
    if (i === "OPEN") {
      open++;
    } else {
      closed++;
    }
  });
  return {
    open,
    closed,
  };
};

/**
 * Accepts an array, the setter of the list
 * @param listSetterCallback
 * @param list
 * @returns a function that accepts only the identifier
 * if the identifier was found in the given array, it will be removed
 * else it will be added to the list.
 */
export const toggleItemInAList =
  (listSetterCallback: (list: string[]) => void, list: string[]) =>
  (item: string) => {
    const tempArr = [...list];
    const idx = tempArr.indexOf(item);
    if (idx < 0) {
      tempArr.push(item);
    } else {
      tempArr.splice(idx, 1);
    }
    listSetterCallback(tempArr);
  };
