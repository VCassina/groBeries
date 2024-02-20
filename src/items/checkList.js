import React from 'react';

function CheckList ({ data }) {
  return (
    <ul className="items flex flex-col gap-10">
      {data.map((item, index) => (
        <li key={index}>
          {item.titre ? (
            // Si l'élément a une clé "titre", on suppose que c'est un plat
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
            // Sinon, on suppose que c'est un simple tableau d'éléments
            <p>A VENIR</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default CheckList;
