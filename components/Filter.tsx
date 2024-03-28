import React from "react";

const Filter = () => {
  return (
    <div className="w-full px-5 my-7 flex items-center justify-between">
      <h1 className="text-alternateBlue text-[16px] font-medium">
        RESULT (25)
      </h1>
      <div className="flex items-center justify-end gap-4">
        <span className="border border-white bg-white px-7 flex items-center justify-center gap-3 p-[15px] rounded-full">
          <p className="text-[11px] font-semibold text-alternateBlue">FILTER</p>
        </span>
        <span className="border border-white bg-white px-7 flex items-center justify-center gap-3 p-3 rounded-full">
          <p className="text-[11px] font-semibold text-alternateBlue">
            TICKET TO CLASS
          </p>
          <i className="bi bi-caret-down-fill text-alternateBlue"></i>
        </span>
      </div>
    </div>
  );
};

export default Filter;
