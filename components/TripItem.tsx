import { trip_item } from "@/interfaces";
import React from "react";
import Image from "next/image";
import { trip_data } from "./utils";
import { trip_item_style, trip_pseudo_classes } from "./utils";
import { Show } from "./Show";
import Each from "./Each";

const TripItem = ({ item, index }: { item: trip_item; index: number }) => {
  return (
    <div className={trip_item_style(trip_data.length, index + 1)}>
      <Image src={item.img} alt={item.airline} />
      <Show>
        <Show.When isTrue={index + 1 !== trip_data.length}>
          <Each
            of={trip_pseudo_classes}
            render={(item: string, index: number) => (
              <div key={index} className={item}></div>
            )}
          />
        </Show.When>
      </Show>
      <div className="flex items-center justify-center gap-10">
        <span className="flex items-center justify-center flex-col">
          <h1 className="text-alternateBlue font-semibold text-lg">JFK</h1>
          <p className="text-alternateBlue text-[11px] font-medium">13:00</p>
        </span>
        <span className="flex items-center justify-center flex-col">
          <p className="text-alternateBlue text-[10px]">QATAR AIRWAYS</p>
          <p className="text-customBrown text-[11px] font-medium">11H 20M</p>
          <p className="text-alternateBlue text-sm font-medium">NON-STOP</p>
        </span>
        <span className="flex items-center justify-center flex-col">
          <h1 className="text-alternateBlue font-semibold text-lg">BOM</h1>
          <p className="text-alternateBlue text-[11px] font-medium">14:20</p>
        </span>
      </div>
      <div className="flex items-center justify-center flex-col gap-3">
        <p className="text-sm font-semibold text-alternateBlue">{item.price}</p>
        <button className="text-[8px] font-semibold border border-customBrown bg-customBrown text-white flex items-center justify-center gap-3 py-2 px-6 rounded-full">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default TripItem;
