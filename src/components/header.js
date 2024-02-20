import React from "react";
import logo from "../assets/Sans_titre-removebg-preview.png";

function Header() {
  /* h/w-20 === 5 rem or 80px !*/
  return (
    <header className="header rounded-2xl bg-green-500 text-white drop-shadow-lg p-2 flex justify-center border-solid border-4 border-slate-600">
      <div className="header-content flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-20 w-20" />
          <h1 className="text-3xl font-bold drop-shadow-md">Groberies</h1>
        </div>
        <p className="drop-shadow-md flex text-center">
          Toujours plus pratique qu'un bloc-note !
        </p>
      </div>
    </header>
  );
}

export default Header;
