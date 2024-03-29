import emirates from "../assets/emirates.png";
import lufthansa from "../assets/lufthansa.png";
import qatar from "../assets/qatar.png";

export const pseudo_items = ["before", "after", "before2", "after2"];

export const trip_pseudo_classes = [
  "absolute rounded-full h-7 w-7 bottom-[-14px] left-[-15px] bg-lightBlue",
  "absolute rounded-full h-7 w-7 bottom-[-14px] right-[-15px] bg-lightBlue",
];

export const trip_options = [
  { id: 1, label: "ONE WAY", value: "one-way" },
  { id: 2, label: "ROUND TRIP", value: "round-trip" },
  { id: 3, label: "MULTI CITY", value: "multi-city" },
];

export const trip_data = [
  { id: 1, img: emirates, price: "$1,572", airline: "Emirates" },
  { id: 2, img: qatar, price: "$2,072", airline: "Qatar" },
  { id: 3, img: lufthansa, price: "$1,872", airline: "Lufthansa" },
  { id: 4, img: emirates, price: "$1,872", airline: "Emirates" },
];

export const handle_tag = (activeIndex: number, itemId: number) => {
  if (activeIndex === itemId) {
    return "uppercase text-sm mb-[4px] text-customBlue";
  }

  return "uppercase text-sm mb-[4px] text-white";
};

export const handle_btn_style = (activeIndex: number, itemId: number) => {
  if (activeIndex === itemId) {
    return "border relative w-full px-4 flex items-end justify-start gap-3 mb-4 border-lightBlue bg-lightBlue py-3 rounded-bl-3xl rounded-tl-3xl";
  }

  return "border relative w-full px-4 flex items-end justify-start gap-3 mb-4 border-customBlue hover:opacity-70 py-3 rounded-bl-3xl rounded-tl-3xl";
};

export const trip_option_btn = (selectedTrip: string, value: string) => {
  if (selectedTrip === value) {
    return "flex items-center justify-center gap-2 bg-alternateBlue h-full rounded-full flex-1";
  }
  return "flex items-center justify-center gap-2 h-full rounded-full flex-1";
};

export const trip_option_p = (selectedTrip: string, value: string) => {
  if (selectedTrip === value) {
    return "text-[11px] font-semibold text-lightBlue";
  }
  return "text-[11px] font-semibold text-alternateBlue";
};

export const trip_item_style = (trips_length: number, index: number) => {
  if (trips_length === index)
    return "p-3 h-[120px] flex items-center justify-between relative";

  return "border-b relative border-dashed border-slate-300 p-3 h-[120px] flex items-center justify-between";
};
