import React from "react";

import Tile from "./Tile";

const Grid = ({ grid }) => {
  return (
    <div className="tiles-container column-container">
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
  );
};

export default Grid;
