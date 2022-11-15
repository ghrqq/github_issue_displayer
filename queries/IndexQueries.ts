import { gql } from "@apollo/client";

export const GET_ISSUES = gql`
  query GetIssues($first: Int, $after: String) {
    repository(owner: "reactjs", name: "reactjs.org") {
      issues(first: $first, after: $after) {
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          createdAt
          url
          author {
            avatarUrl
            login
            url
          }
          bodyHTML
          state
          stateReason
          title
          labels(first: 3) {
            nodes {
              color
              id
              name
            }
          }
          author {
            avatarUrl
            login
            url
          }
        }
      }
      open: issues(states: OPEN) {
        totalCount
      }
      closed: issues(states: CLOSED) {
        totalCount
      }
    }
  }
`;
