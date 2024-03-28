"use client";
import { useState } from "react";
import { routes } from "@/routes";
import { Route } from "@/interfaces";
import Each from "./Each";
import NavItem from "./NavItem";

const Links = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleId = (linkId: number) => {
    setActiveIndex(linkId);
  };

  return (
    <div className="w-full pl-5 mt-5">
      <Each
        of={routes}
        render={(item: Route, index: number) => {
          const props = { activeIndex, toggleId, index, item };
          return <NavItem {...props} />;
        }}
      />
    </div>
  );
};

export default Links;
