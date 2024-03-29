import React from "react";

const TripInfo = () => {
  return (
    <div className="flex-[2] border border-customBlue bg-customBlue rounded-3xl p-3">
      <div className="border border-red-500 flex items-center justify-between">
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
    </div>
  );
};

export default TripInfo;
