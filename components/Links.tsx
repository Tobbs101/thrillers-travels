"use client";
import React, { useState } from "react";
import { routes } from "@/routes";
import { Route } from "@/interfaces";
import Each from "./Each";
import NavItem from "./NavItem";

const Links = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleID = (linkId: number) => {
    setActiveIndex(linkId);
  };

  return (
    <div className="w-full pl-5">
      <Each
        of={routes}
        render={(item: Route, index: number) => {
          const props = { activeIndex, toggleID, index, item };
          return <NavItem {...props} />;
        }}
      />
    </div>
  );
};

export default Links;
