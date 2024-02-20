import React from "react"
import useResolution from "../helpers/useResolution";
import ErrorResolution from "./errorResolution";
import Header from "./header";
import GroceriesList from "./groceriesList";
import Footer from "./footer";

function MainComponent(){
  const resolution = useResolution()
  return (
    <main className="welcome-container m-4">
      {resolution === 'mobile' ? (
        <>
          <Header />
          <GroceriesList />
          <Footer />
        </>
      ) : (
        <ErrorResolution />
      )}
    </main>
  )
}

export default MainComponent;