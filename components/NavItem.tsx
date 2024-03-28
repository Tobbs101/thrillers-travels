import React from "react";
import { navIcons } from "./utils";
import { NavItemProps } from "@/interfaces";

const NavItem = ({ item, activeIndex, toggleID, index }: NavItemProps) => {
  return (
    <button
      onClick={() => toggleID(item.id)}
      className={`border hover:opacity-80 duration-200 w-full px-4 flex items-end justify-start gap-4 mb-4 ${
        activeIndex === item.id ? "border-white bg-white" : "border-customBlue"
      } py-3 rounded-bl-3xl rounded-tl-3xl`}
    >
      <span>{navIcons[index]}</span>
      <p
        className={`uppercase text-sm mb-[4px] ${
          activeIndex === item.id ? "text-customBlue" : "text-white"
        }`}
      >
        {item.title}
      </p>
    </button>
  );
};

export default NavItem;
