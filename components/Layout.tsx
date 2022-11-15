import React from "react";
import Footer from "./LayoutElements/Footer";
import HeadElement from "./LayoutElements/HeadElement";
import { DataContext, UtilityContext } from "../contexts/contexts";
import { useIssueData } from "../hooks/useIssueData";
import { useUtilities } from "../hooks/useUtilities";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  const dataContext = useIssueData();
  const utilityContext = useUtilities();
  return (
    <DataContext.Provider value={dataContext}>
      <UtilityContext.Provider value={utilityContext}>
        <div className="flex flex-col min-h-screen items-stretch justify-between">
          <HeadElement />
          <main>{children}</main>
          <Footer />
        </div>
      </UtilityContext.Provider>
    </DataContext.Provider>
  );
};

export default Layout;
