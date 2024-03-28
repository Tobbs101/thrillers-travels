import React, { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex bg-lightBlue text-black min-h-screen">
      {children}
    </main>
  );
};

export default PageLayout;
