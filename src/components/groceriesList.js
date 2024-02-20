import React from "react";
import data from "../datas/groceries.json";
import CheckList from "../items/checkList.js";

console.log(data.plats.ingredients);

function GroceriesList() {
  return (
    <section className="footer text-center py-4 flex flex-col gap-10">
      <article>
        <h3 className="font-bold border-b-4 my-8" id="plats">
          <p>PLATS</p>
        </h3>
        <CheckList data={data.plats} />
        <h3 className="font-bold border-b-4 my-8" id="plats">
        <p>ACCOMPAGNEMENTS</p>
        </h3>
        <CheckList data={data.accompagnements} />
        <h3 className="font-bold border-b-4 my-8" id="plats">
        <p>ARTICLES</p>
        </h3>
        <CheckList data={data.articles} />
      </article>
    </section>
  );
}

export default GroceriesList;
