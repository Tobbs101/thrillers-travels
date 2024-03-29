"use client";
import { useState } from "react";
import tripview from "../assets/tripview.png";
import Image from "next/image";
import Each from "./Each";
import { trip_routes } from "./utils";
import { trip_route_props } from "@/interfaces";
import { trip_route_btn } from "./utils";

const TripInfo = () => {
  const [selectedRoute, setSelectedRoute] = useState("non-stop");

  const handleChoice = (value: string) => {
    setSelectedRoute(value);
  };

  return (
    <div className="flex-[2] overflow-hidden bg-customBlue rounded-3xl">
      <div className="p-3 flex items-center justify-between">
        <span className="text-white flex items-center justify-center flex-col text-sm">
          <p>FROM</p>
          <p>JFK</p>
        </span>
        <p className="text-[10px] font-normal text-white">NON-STOP</p>
        <span className="text-white flex items-center justify-center flex-col text-sm">
          <p>TO</p>
          <p>BOM</p>
        </span>
      </div>
      <div className="h-[280px] overflow-hidden flex items-center justify-center">
        <Image src={tripview} alt={"Trip View"} className="" />
      </div>
      <div className="w-full bg-alternateBlue">
        <div className="p-3 rounded-full flex items-center justify-between gap-2">
          <Each
            of={trip_routes}
            render={(item: trip_route_props, index: number) => {
              return (
                <button
                  onClick={() => handleChoice(item.value)}
                  key={index}
                  className={trip_route_btn(selectedRoute, item.value)}
                >
                  <p className="text-[11px] font-semibold text-white">
                    {item.label}
                  </p>
                </button>
              );
            }}
          />
        </div>
        <div className="px-5">
          <h1 className="text-xs text-white">PRICE</h1>
          <div className="border-b border-[#5a7674] mt-3 mb-[55px] relative">
            <div className="h-5 w-5 bg-customBrown rounded-full absolute translate-y-[-50%] top-[50%] left-10">
              <div className="flex px-3 items-center justify-center h-4 bg-customBrown rounded-full absolute top-7 left-[-14px] text-white text-[9px]">
                <div className="absolute w-3 h-3 top-[-3px] rotate-45 bg-customBrown"></div>
                <p className="z-10">$500</p>
              </div>
            </div>
            <div className="h-5 w-5 bg-customBrown rounded-full absolute translate-y-[-50%] top-[50%] right-[40px]">
              <div className="flex px-3 items-center justify-center h-4 bg-customBrown rounded-full absolute top-7 left-[-16.5px] text-white text-[9px]">
                <div className="absolute w-3 h-3 top-[-3px] rotate-45 bg-customBrown"></div>
                <p className="z-10">$2,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
