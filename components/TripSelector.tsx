"use client";
import React, { useState } from "react";
import Each from "./Each";
import { trip_options, trip_option_btn, trip_option_p } from "./utils";
import { trip_option_props } from "@/interfaces";

const TripSelector = () => {
  const [selectedTrip, setSelectedTrip] = useState("one-way");

  const handleChoice = (value: string) => {
    setSelectedTrip(value);
  };

  return (
    <div className="w-full bg-white rounded-full py-7 px-10">
      <div className="grid grid-cols-2 gap-5 mb-6">
        <div className="border border-lightBlue bg-lightBlue p-3 rounded-full flex items-center justify-between">
          <span className="flex items-center justify-center gap-2">
            <i className="bi bi-geo-alt-fill text-alternateBlue"></i>
            <p className="text-[11px] font-semibold text-alternateBlue">
              NEW YORK (JFK)
            </p>
          </span>
          <div className="w-7 h-7 flex items-center justify-center rounded-full border border-alternateBlue bg-alternateBlue">
            <i className="bi bi-arrow-left-right text-xs font-bold text-lightBlue"></i>
          </div>
          <span className="flex items-center justify-center gap-2">
            <i className="bi bi-geo-alt-fill text-alternateBlue"></i>
            <p className="text-[11px] font-semibold text-alternateBlue">
              MUMBAI (BOM)
            </p>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <span className="border border-lightBlue bg-lightBlue flex items-center justify-center gap-3 p-3 rounded-full">
            <i className="bi bi-calendar3"></i>
            <p className="text-[11px] font-semibold text-alternateBlue">
              29 JULY 2019
            </p>
          </span>
          <span className="border border-lightBlue bg-lightBlue flex items-center justify-center gap-3 p-3 rounded-full">
            <i className="bi bi-person-fill"></i>
            <p className="text-[11px] font-semibold text-alternateBlue">
              2 TRAVELLER
            </p>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="border border-lightBlue bg-lightBlue p-1 rounded-full flex items-center justify-between gap-2">
          <Each
            of={trip_options}
            render={(item: trip_option_props, index: number) => {
              return (
                <button
                  key={index}
                  className={trip_option_btn(selectedTrip, item.value)}
                >
                  <p className={trip_option_p(selectedTrip, item.value)}>
                    {item.label}
                  </p>
                </button>
              );
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <span className="border border-lightBlue bg-lightBlue flex items-center justify-center gap-3 p-3 rounded-full">
            <i className="bi bi-calendar3"></i>
            <p className="text-[11px] font-semibold text-alternateBlue">
              29 JULY 2019
            </p>
          </span>
          <span className="border border-lightBlue bg-lightBlue flex items-center justify-center gap-3 p-3 rounded-full">
            <i className="bi bi-person-fill"></i>
            <p className="text-[11px] font-semibold text-alternateBlue">
              2 TRAVELLER
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TripSelector;
