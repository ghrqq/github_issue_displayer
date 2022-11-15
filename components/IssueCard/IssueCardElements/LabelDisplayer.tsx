import React from "react";
import { useDataContext } from "../../../contexts/contexts";
import { GitHub_Labels } from "../../../types/globalTypes";

const LabelDisplayer = (props: GitHub_Labels) => {
  const { nodes } = props;
  const { toggleLabelFromSelection } = useDataContext();

  return (
    <div className="text-xs hidden md:inline">
      {nodes.map((i) => (
        <button
          style={{
            color: `#${i.color}`,
          }}
          className="inline p-1 text-xs hover:underline"
          key={i.id}
          onClick={() => toggleLabelFromSelection(i.id)}
        >
          {i.name}
        </button>
      ))}
    </div>
  );
};

export default LabelDisplayer;
