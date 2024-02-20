import React from "react";
import data from "../datas/groceries.json";
import CheckList from "../items/checkList.js";
import ToggleMenu from "../items/toggleMenu.js";

function GroceriesList() {
  const [isOpen, setIsOpen] = React.useState({
    plats: false,
    accompagnements: false,
    articles: false,
  });

  const toggleCategory = (category) => {
    setIsOpen({ ...isOpen, [category]: !isOpen[category] });
  };

  return (
    <section className="footer text-center py-4 flex flex-col gap-10">
      <article className="flex flex-col h-100">
        <ToggleMenu
          category="plats"
          title="PLATS"
          isOpen={isOpen.plats}
          toggleCategory={toggleCategory}
        />
        <CheckList data={data.plats} isOpen={isOpen.plats} />
        <ToggleMenu
          category="accompagnements"
          title="ACCOMPAGNEMENTS"
          isOpen={isOpen.accompagnements}
          toggleCategory={toggleCategory}
        />
        <CheckList data={data.accompagnements} isOpen={isOpen.accompagnements} />
        <ToggleMenu
          category="articles"
          title="ARTICLES"
          isOpen={isOpen.articles}
          toggleCategory={toggleCategory}
        />
        <CheckList data={data.articles} isOpen={isOpen.articles} />
      </article>
    </section>
  );
}

export default GroceriesList;
