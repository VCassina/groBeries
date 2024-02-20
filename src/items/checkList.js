import React from "react";

function CheckList({ data, isOpen }) {
  return (
    <ul
    className={`items flex flex-col mx-8 ${
      data.some((item) => item.titre) ? "gap-10" : ""
    } ${isOpen ? "open--sass" : "hidden--sass"}`}
  >
      {data.map((item, index) => (
        <li key={index}>
          {item.titre ? (
            // Si l'élément a une clé "titre", on suppose que c'est un plat.
            <>
              <h2 className="font-bold border-b-2 border-gray-400 mb-2">
                {item.titre}
              </h2>
              <ul>
                {item.ingredients.map((ingredient, i) => (
                  <li key={i} className="flex justify-between mx-8">
                    <p>{ingredient}</p>
                    <input type="checkbox" />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            // Sinon, on suppose que c'est un simple tableau d'éléments.
            <ul>
              <li className="flex justify-between mx-8">
                <p>{item}</p>
                <input type="checkbox" />
              </li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default CheckList;
