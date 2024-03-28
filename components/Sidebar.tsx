import React from "react";
import Profile from "./Profile";
import Links from "./Links";
import bg_footer from "../assets/nav_footer.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <section className="border p-0 border-customBlue bg-customBlue flex-1 rounded-br-3xl rounded-tr-3xl">
      <Profile />
      <Links />
      <div className="w-[80%] mx-auto flex items-center flex-col justify-center gap-2">
        <h1 className="text-customBrown text-[13px] font-medium">
          ACTIVE USERS
        </h1>
        <Image
          src={bg_footer}
          alt="background footer"
          className="h-[150px] object-contain"
        />
      </div>
    </section>
  );
};

export default Sidebar;
