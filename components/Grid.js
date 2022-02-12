import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

import Tile from "./Tile";

const Grid = () => {
  const { grid, word } = useContext(AppContext);

  return (
    <div className="tiles-container column-container">
      {grid.map((row, rowIndex) => {
        return (
          <div className="row-container">
            {row.map((obj, columnIndex) => (
              <Tile
                key={columnIndex}
                letter={obj}
                row={rowIndex}
                column={columnIndex}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
