import React from "react";
import { useDataContext } from "../../contexts/contexts";

const UserFilter = () => {
  const {
    users,
    clearFilters,
    toggleUserFromSelection,
    selectedUsers,
    displayableIssues,
  } = useDataContext();

  /**
   * Converts users to buttons
   * @returns button[]
   */
  const renderUsers = () => {
    return users.map((i) => {
      return (
        <button
          className={`p-1 border text-xs inline ${
            selectedUsers.includes(i.login)
              ? "bg-blue-100 dark:bg-gray-600"
              : ""
          }`}
          onClick={() => toggleUserFromSelection(i.login)}
          key={i.login}
        >
          {i.login || "Anon User"}
        </button>
      );
    });
  };
  return (
    <div className="flex flex-col items-stretch justify-between">
      <div className="flex flex-row items-center justify-evenly sticky top-0 bg-gray-50 dark:bg-gray-900 mx-2">
        <span className="text-xs">{selectedUsers.length} users selected</span>
        <span className="text-xs">{displayableIssues.length} issues found</span>
        <button onClick={clearFilters}>Clear</button>
      </div>
      <div className="h-auto block  mx-4">{renderUsers()}</div>
    </div>
  );
};

export default UserFilter;
