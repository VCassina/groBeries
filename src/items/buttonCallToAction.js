import React from "react";

function ButtonCallToAction({ href, content }) {
  return (
    <a
      className="rounded-full w-12 h-12 py-2 px-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:shadow-outline-blue flex justify-center"
      href={href}
    >
      {content}
    </a>
  );
}

export default ButtonCallToAction;
