import React from "react";
import MainComponent from "../components/mainComponent";
import Header from "../components/header";
import Footer from "../components/footer";
import ErrorResolution from "../components/errorResolution";
import useResolution from "../helpers/useResolution";

function HomePage() {
  const resolution = useResolution();
  return (
    <>
      {resolution === "mobile" ? (
        <>
          <Header />
          <MainComponent />
          <Footer />
        </>
      ) : (
        <ErrorResolution />
      )}
    </>
  );
}

export default HomePage;
