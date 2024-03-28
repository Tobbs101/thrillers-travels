import React from "react";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <section className="border p-0 overflow-hidden border-customBlue bg-customBlue flex-1 rounded-br-3xl rounded-tr-3xl">
      <Profile />
    </section>
  );
};

export default Sidebar;
