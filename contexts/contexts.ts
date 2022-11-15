import { createContext, useContext } from "react";
import { UseIssueDataOutput } from "../hooks/useIssueData";
import { UseUtilitiesOutput } from "../hooks/useUtilities";

export const DataContext = createContext<UseIssueDataOutput | undefined>(
  undefined
);
export const UtilityContext = createContext<UseUtilitiesOutput | undefined>(
  undefined
);

/**
 * These tiny hooks allow us to create the context without passing
 * default value. Instead of importing useContext and the context itself,
 * these hooks should be imported when needed.
 * @returns DataContext
 */
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Data context is not defined.");
  }

  return context;
};
export const useUtilityContext = () => {
  const context = useContext(UtilityContext);
  if (!context) {
    throw new Error("Utility context is not defined.");
  }

  return context;
};
