import React, { useState } from "react";

import Grid from "../components/Grid";

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
      <Grid grid={grid} />
    </div>
  );
}
