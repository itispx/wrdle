import React, { useState } from "react";

import Tile from "../components/Tile";

const initialGrid = [
  ["A", "B", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export default function Home() {
  const [grid, setGrid] = useState(initialGrid);

  function updateGrid(rowIndex, columnIndex, value) {
    let tempGrid = [...grid];
    tempGrid[rowIndex][columnIndex] = value;

    setGrid(tempGrid);
  }

  return (
    <div className="container">
      <div className="tiles-container">
        {grid.map((row) => {
          return (
            <div className="row-container">
              {row.map((obj, index) => (
                <Tile key={index} letter={obj} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
