import React from "react";
import { navIcons } from "./utils";
import { NavItemProps } from "@/interfaces";
import "./item.css";

const NavItem = ({ item, activeIndex, toggleID, index }: NavItemProps) => {
  return (
    <button
      id="nav-item"
      onClick={() => toggleID(item.id)}
      className={`border relative w-full px-4 flex items-end justify-start gap-4 mb-4 ${
        activeIndex === item.id
          ? "border-lightBlue bg-lightBlue"
          : "border-customBlue hover:opacity-80"
      } py-3 rounded-bl-3xl rounded-tl-3xl`}
    >
      {activeIndex === item.id && (
        <div className="border border-lightBlue absolute w-[20px] h-full bg-lightBlue top-0 right-[-5px]"></div>
      )}
      {activeIndex === item.id && <span id="before"></span>}
      {activeIndex === item.id && <span id="after"></span>}
      {activeIndex === item.id && <span id="before2"></span>}
      {activeIndex === item.id && <span id="after2"></span>}
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
