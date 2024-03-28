import React from "react";
import { pseudo_items, handle_tag, handle_btn_style } from "./utils";
import { nav_item_props } from "@/interfaces";
import { Show } from "./Show";
import Each from "./Each";
import "./item.css";

const NavItem = ({ item, activeIndex, toggleId }: nav_item_props) => {
  return (
    <button
      id="nav-item"
      onClick={() => toggleId(item.id)}
      className={handle_btn_style(activeIndex, item.id)}
    >
      <Show>
        <Show.When isTrue={activeIndex === item.id}>
          <div className="border border-lightBlue absolute w-[20px] h-full bg-lightBlue top-0 right-[-5px]"></div>
        </Show.When>
      </Show>
      <Each
        of={pseudo_items}
        render={(pseudo_item: string, index: number) => (
          <Show key={index}>
            <Show.When isTrue={activeIndex === item.id}>
              <span id={pseudo_item}></span>
            </Show.When>
          </Show>
        )}
      />
      <span>{item.icon}</span>
      <p className={handle_tag(activeIndex, item.id)}>{item.title}</p>
    </button>
  );
};

export default NavItem;
