export const pseudo_items = ["before", "after", "before2", "after2"];

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
