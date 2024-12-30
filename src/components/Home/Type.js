import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Etudiante en Big Data et Fouille de données ",
          "En recherche d'une nouvelle opportunité",
        ],
        autoStart: true,
        loop: false,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
