import React from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";

function ToggleMenu({ category, title, isOpen, toggleCategory }) {
  console.log(isOpen);
  return (
    <article>
      <h3
        className="titleChevron font-bold rounded-lg text-xl border-4 my-8 flex justify-center"
        id={category}
        onClick={() => toggleCategory(category)}
      >
    <p className="flex items-center w-full justify-between mx-10">
          {title}{" "}
          {isOpen ? (
            <HiChevronDown className="h-8 w-8" />
          ) : (
            <HiChevronRight className="h-8 w-8" />
          )}
        </p>
      </h3>
    </article>
  );
}

export default ToggleMenu;
