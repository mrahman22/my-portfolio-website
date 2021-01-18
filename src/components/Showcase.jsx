import React from "react";
import Typewriter from "typewriter-effect";

function Showcase() {
  return (
    <div className="showcase">
      <img
        className="portrait-pic"
        src={require("../portrait.jpeg")}
        alt="portrait"
      />
      <h1>Mustabur Rahman</h1>
      <Typewriter
        options={{
          strings: [
            "Junior software developer",
            "Website built from the ground up using React.js framework",
          ],
          autoStart: true,
          loop: true,

        }}
      />
    </div>
  );
}

export default Showcase;
