import React from "react";
import ButtonCallToAction from "../items/buttonCallToAction";

function SideNav() {
  return (
    <aside className=" w-1/5 h-screen flex flex-col text-white fixed top-0 right-0">
      <nav className="flex-grow mt-8 p-4 flex flex-col gap-10 justify-center items-center">
        <ButtonCallToAction href="#plats" content="P"/>
        <ButtonCallToAction href="#articles" content="A"/>
      </nav>
    </aside>
  );
}

export default SideNav;
