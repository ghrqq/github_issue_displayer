export interface Data {
  data: {
    repository: {
      issues: {
        totalCount: number;
        nodes: Issue_Node[];
      };
      open: {
        totalCount: 561;
      };
      closed: {
        totalCount: 826;
      };
    };
  };
}
export interface GitHub_Labels {
  nodes: GitHub_Label_Node[];
}

export interface GitHub_Label_Node {
  id: string;
  name: string;
  color: string;
}

export interface Issue_Node {
  id: string;
  createdAt: string;
  url: string;
  author: GitHub_Author;
  bodyHTML: string;
  state: "OPEN" | "CLOSED";
  stateReason: string;
  title: string;
  labels: GitHub_Labels;
}
export interface GitHub_Author {
  login: string;
  url: string;
  avatarUrl: string;
}
