import React from "react";
import CustomCheckbox from "./customCheckBox.js";

function CheckList({ data, isOpen }) {
  return (
    <ul className={`wrappersass flex justify-center ${isOpen ? "is-open" : ""}`}>
      <div className="flex w-full">
        <ul
          className={`innersass flex flex-col mx-8 w-full ${isOpen ? "is-open" : ""} ${
            data.some((item) => item.titre) ? "gap-10" : ""
          }`}
        >
          {data.map((item, index) => (
            <li key={index}>
              {item.titre ? (
                // Si l'élément a une clé "titre", on suppose que c'est un plat.
                <>
                  <h2 className="font-bold border-b-2 border-gray-400 mb-2 ">
                    {item.titre}
                  </h2>
                  <ul className="flex flex-col">
                    {item.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex justify-between m-4">
                        <p>{ingredient}</p>
                        <CustomCheckbox />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                // Sinon, on suppose que c'est un simple tableau d'éléments.
                <ul>
                  <li className="flex justify-between m-4">
                    <p>{item}</p>
                    <CustomCheckbox />
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </ul>
  );
}

export default CheckList;
