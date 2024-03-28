import React from "react";
import { pseudo_items, handle_tag, handle_btn_style } from "./utils";
import { nav_item_props, pseudo_props } from "@/interfaces";
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
        render={(pseudo_item: pseudo_props, index: number) => (
          <Show key={index}>
            <Show.When isTrue={activeIndex === item.id}>
              <Show.When isTrue={activeIndex === 1}>
                <span id={pseudo_item.id} className="bg-alternateBlue"></span>
              </Show.When>
              <Show.Else>
                <span className="bg-customBlue" id={pseudo_item.id}></span>
              </Show.Else>
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
