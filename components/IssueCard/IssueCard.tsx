import React from "react";
import { Issue_Node } from "../../types/globalTypes";
import AuthorDisplayer from "./IssueCardElements/AuthorDisplayer";
import LabelDisplayer from "./IssueCardElements/LabelDisplayer";

interface Props extends Issue_Node {
  isOpen: boolean;
  toggleDetails: (id: string) => void;
  isChecked: boolean;
  handleSelection: (id: string) => void;
}

const IssueCard = (props: Props) => {
  const {
    id,
    author,
    createdAt,
    state,
    stateReason,
    labels,
    title,
    bodyHTML,
    isOpen,
    toggleDetails,
    isChecked,
    handleSelection,
  } = props;

  const isoToLocaleConverter = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleString();
  };

  return (
    <div className="w-full max-w-full ">
      <div
        role="button"
        className="flex flex-row items-center justify-between bg-gray-200 dark:bg-gray-800 px-8 border border-gray-400 dark:border-gray-600  rounded-lg "
        onClick={() => toggleDetails(id)}
      >
        <div className="w-1/3 flex flex-col md:flex-row items-center justify-start">
          <input
            type="checkbox"
            className="w-1/5"
            checked={isChecked}
            onClick={(e) => {
              e.stopPropagation();
              handleSelection(id);
            }}
            readOnly
          />
          <AuthorDisplayer {...author} />
        </div>
        <div className="w-1/3 text-xs md:text-base">
          <p>{title}</p>
        </div>
        <div className="flex flex-row w-1/3 items-center justify-between">
          <LabelDisplayer {...labels} />
          <p
            className={`${
              state === "OPEN" ? "text-red-500" : "text-green-500"
            } text-center p-2 text-sm`}
          >
            {state}
            <br />
            {stateReason && `[${stateReason}]`}
            <br />
            <span className="text-xs">{isoToLocaleConverter(createdAt)}</span>
          </p>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } message-body p-6 text-justify bg-gray-100 dark:bg-gray-600`}
        dangerouslySetInnerHTML={{ __html: bodyHTML }}
      ></div>
    </div>
  );
};

export default IssueCard;
