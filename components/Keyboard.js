import React from "react";

import Key from "./Key";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "⌫"],
  ["Z", "X", "C", "V", "B", "N", "M", "⏎"],
];

const Keyboard = () => {
  return (
    <div className="keyboard column-container">
      {keys.map((row) => {
        return (
          <div className="row-container">
            {row.map((obj, index) => (
              <Key key={index} k={obj} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
