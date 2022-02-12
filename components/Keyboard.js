import React, { useState } from "react";

import Key from "./Key";

const initialKeys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "⌫"],
  ["Z", "X", "C", "V", "B", "N", "M", "⏎"],
];

const Keyboard = React.memo(() => {
  const [keys, setKeys] = useState(initialKeys);

  return (
    <div className="keyboard column-container">
      {keys.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="row-container">
            {row.map((obj) => (
              <Key key={obj.id} k={obj} />
            ))}
          </div>
        );
      })}
    </div>
  );
});

export default Keyboard;
