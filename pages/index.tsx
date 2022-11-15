import { useQuery } from "@apollo/client";
import IssueCard from "../components/IssueCard/IssueCard";
import { useEffect } from "react";
import { useDataContext, useUtilityContext } from "../contexts/contexts";

import { GET_ISSUES } from "../queries/IndexQueries";
import ToolBarMenu from "../components/LayoutElements/ToolBarMenu";

export default function Home() {
  const { loading, error, data, fetchMore } = useQuery(GET_ISSUES, {
    variables: {
      first: 100,
    },
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    initialiseData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { initialiseData, displayableIssues } = useDataContext();
  const {
    selectedIssues,
    toggleDetailVisibility,
    toggleSelection,
    visibleItems,
  } = useUtilityContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!displayableIssues) {
    return;
  }

  const loadMore = () => {
    fetchMore({
      variables: {
        after: data.repository.issues.pageInfo.endCursor,
      },
      updateQuery: (data, { fetchMoreResult }) => {
        const newNodes = fetchMoreResult.repository.issues.nodes;
        const pageInfo = fetchMoreResult.repository.issues.pageInfo;
        const closed = fetchMoreResult.repository.closed;
        const totalCount = fetchMoreResult.repository.issues.totalCount;
        const open = fetchMoreResult.repository.closed;

        const result = newNodes.length
          ? {
              ...data,
              repository: {
                issues: {
                  nodes: [...data.repository.issues.nodes, ...newNodes],
                  pageInfo,
                  totalCount,
                },
                closed,
                open,
              },
            }
          : data;

        return result;
      },
    });
  };

  return (
    <div className="flex flex-row items-start justify-evenly">
      <ToolBarMenu />

      <div className="flex flex-col items-stretch justify-center w-11/12 overflow-hidden mx-2">
        {displayableIssues.map((i: any) => (
          <IssueCard
            key={i.id}
            {...i}
            isOpen={visibleItems.includes(i.id)}
            toggleDetails={toggleDetailVisibility}
            isChecked={selectedIssues.includes(i.id)}
            handleSelection={toggleSelection}
          />
        ))}
        <button className="text-3xl border rounded-lg" onClick={loadMore}>
          More...
        </button>
      </div>
    </div>
  );
}
