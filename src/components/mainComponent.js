import React from "react";
import useResolution from "../helpers/useResolution";
import ErrorResolution from "./errorResolution";
import Header from "./header";
import GroceriesList from "./groceriesList";
import Footer from "./footer";
// import SideNav from "./sideNav";

function MainComponent() {
  const resolution = useResolution();
  return (
    <div className="welcome-container m-4">
      {resolution === "mobile" ? (
        <>
          <Header />
          <main>
            <GroceriesList />
            {/* <SideNav /> */}
            </main>
            <Footer />
          
        </>
      ) : (
        <ErrorResolution />
      )}
    </div>
  );
}

export default MainComponent;
