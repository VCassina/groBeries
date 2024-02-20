import React from "react";
import data from "../datas/groceries.json";

function GroceriesList() {
  return (
    <footer className="footer text-center py-4">
      <ul className="plats">
      {data.plats.map((plat, index) => (
        <li key={index}>
          <h2 className="font-bold border-b-2 border-gray-400 mb-2">{plat.titre}</h2>
          <ul>
            {plat.ingredients && plat.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    </footer>
  );
}

export default GroceriesList;
