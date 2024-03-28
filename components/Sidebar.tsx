import React from "react";
import Image from "next/image";
import avatar from "../assets/avatar.png";

const Sidebar = () => {
  return (
    <section className="border p-0 overflow-hidden border-customBlue bg-customBlue flex-1 rounded-br-3xl rounded-tr-3xl">
      <div className="w-full bg-alternateBlue h-[300px] flex items-center justify-center gap-3 flex-col">
        <Image src={avatar} alt="avatar" />
        <h1 className="text-white text-3xl font-medium">ALEX JOHNSON</h1>
        <p className="text-white text-sm">alex.johnson@gmail.com</p>
        <p></p>
      </div>
    </section>
  );
};

export default Sidebar;
