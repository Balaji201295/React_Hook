import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("red");

  return (
    <section>
      <h2 className={`text-${color}-500`}>Text Color</h2>
      <button type="button" onClick={() => setColor("green")}>
        Click to change color
      </button>
    </section>
  );
};

export default Color;
