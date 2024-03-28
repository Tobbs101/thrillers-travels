import React from "react";
import { nav_icons } from "./utils";
import { nav_item_props } from "@/interfaces";
import { Show } from "./Show";
import "./item.css";

const NavItem = ({ item, activeIndex, toggleID, index }: nav_item_props) => {
  const handleTag = () => {
    if (activeIndex === item.id) {
      return "uppercase text-sm mb-[4px] text-customBlue";
    }

    return "uppercase text-sm mb-[4px] text-white";
  };

  return (
    <button
      id="nav-item"
      onClick={() => toggleID(item.id)}
      className={`border relative w-full px-4 flex items-end justify-start gap-3 mb-4 ${
        activeIndex === item.id
          ? "border-lightBlue bg-lightBlue"
          : "border-customBlue hover:opacity-80"
      } py-3 rounded-bl-3xl rounded-tl-3xl`}
    >
      <Show>
        <Show.When isTrue={activeIndex === item.id}>
          <div className="border border-lightBlue absolute w-[20px] h-full bg-lightBlue top-0 right-[-5px]"></div>
        </Show.When>
      </Show>
      {activeIndex === item.id && (
        <span
          id="before"
          className={activeIndex === 1 ? "bg-alternateBlue" : "bg-customBlue"}
        ></span>
      )}
      {activeIndex === item.id && <span id="after"></span>}
      {activeIndex === item.id && <span id="before2"></span>}
      {activeIndex === item.id && <span id="after2"></span>}
      {nav_icons[index]}
      <p className={handleTag()}>{item.title}</p>
    </button>
  );
};

export default NavItem;
