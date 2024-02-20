import React from "react";

function ErrorResolution() {
  return (
    <article className="error-resolution-container h-screen flex flex-col justify-center">
      <div className="bg-red-500 text-white p-6 shadow-lg text-center flex flex-col">
        <h1>Error: Resolution not supported.</h1>
        <p>Please use a mobile device to view this content.</p>
      </div>
    </article>
  );
}

export default ErrorResolution;
