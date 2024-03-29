import React from "react";
import TripsList from "./TripsList";
import TripInfo from "./TripInfo";

const CurrentTrips = () => {
  return (
    <div className="w-full gap-4 flex items-start justify-center">
      <TripsList />
      <TripInfo />
    </div>
  );
};

export default CurrentTrips;
