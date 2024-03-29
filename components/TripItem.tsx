import { trip_item } from "@/interfaces";
import React from "react";
import Image from "next/image";
import { trip_data } from "./utils";
import { trip_item_style } from "./utils";

const TripItem = ({ item, index }: { item: trip_item; index: number }) => {
  return (
    <div className={trip_item_style(trip_data.length, index + 1)}>
      <Image src={item.img} alt={item.airline} />
    </div>
  );
};

export default TripItem;
