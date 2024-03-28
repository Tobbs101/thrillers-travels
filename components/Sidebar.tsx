import React from "react";
import Profile from "./Profile";
import SideNav from "./SideNav";

const Sidebar = () => {
  return (
    <section className="border p-0 border-customBlue bg-customBlue flex-1 rounded-br-3xl rounded-tr-3xl">
      <Profile />
      <SideNav />
    </section>
  );
};

export default Sidebar;
