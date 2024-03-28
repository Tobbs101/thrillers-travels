import React from "react";
import { navIcons } from "./utils";
import { routes } from "@/routes";
import { Route } from "@/interfaces";
import Each from "./Each";

const SideNav = () => {
  return (
    <div className="w-full border border-red-500">
      <Each
        of={routes}
        render={(item: Route, index: number) => (
          <div className="border px-4 flex items-center justify-start gap-3 mb-4 border-blue-500 py-3">
            <span>{navIcons[index]}</span>
            <p className="uppercase text-sm">{item.title}</p>
          </div>
        )}
      />
    </div>
  );
};

export default SideNav;
