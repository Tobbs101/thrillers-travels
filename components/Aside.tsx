import React, { ReactNode } from "react";

const Aside = ({ children }: { children?: ReactNode }) => {
  return <div className="border border-blue-500 flex-[4] p-5">{children}</div>;
};

export default Aside;
