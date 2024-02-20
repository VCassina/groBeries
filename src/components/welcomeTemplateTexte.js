import React from "react";
import useResolution from '../helpers/useResolution';

function WelcomeTemplateTexte() {
  const resolution = useResolution();
  console.log(resolution);
  return (
    <article className="welcome-container">
      <h1 className="bg-yellow-500">Welcome to the BoötesDev template.</h1>
      <p>This is the welcome template text component, have a good day.</p>
    </article>
  );
}

export default WelcomeTemplateTexte;