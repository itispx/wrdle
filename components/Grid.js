import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

import Tile from "./Tile";

const Grid = React.memo(() => {
  const { grid } = useContext(AppContext);

  return (
    <div className="tiles-container column-container">
      {grid.map((row, rowIndex) => {
        return (
          <div className="row-container">
            {row.map((obj, columnIndex) => (
              <Tile letter={obj} row={rowIndex} column={columnIndex} />
            ))}
          </div>
        );
      })}
    </div>
  );
});

export default Grid;
