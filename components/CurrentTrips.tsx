import React from "react";

const CurrentTrips = () => {
  return (
    <div className="w-full gap-4 flex items-start justify-center">
      <div className="flex-[4] border border-white bg-white rounded-3xl p-3"></div>
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
    </div>
  );
};

export default CurrentTrips;
