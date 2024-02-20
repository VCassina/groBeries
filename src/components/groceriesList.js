import React from "react";
import data from "../datas/groceries.json";
import CheckList from "../items/checkList.js";

console.log(data.plats.ingredients);

function GroceriesList() {
  return (
    <section className="footer text-center py-4 flex flex-col gap-10">
      <article>
        <h3 className="font-bold border-b-4" id="plats">
          PLATS
        </h3>
        <CheckList data={data.plats} />
        <CheckList data={data.articles} />
      </article>
    </section>
  );
}

export default GroceriesList;
