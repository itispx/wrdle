import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const Tile = React.memo(({ letter, row, column }) => {
  const { currentIndex, setCurrentIndex } = useContext(AppContext);

  let currentRow = currentIndex[0];

  let active = currentRow === row ? true : currentRow > row ? false : null;

  let current = currentIndex[0] === row && currentIndex[1] === column;

  return (
    <button
      className={`tile ${
        active ? "availableTile" : active === false ? "previousTile" : null
      } ${current && "currentTile"}`}
      onClick={() =>
        currentRow === row ? setCurrentIndex([row, column]) : null
      }
    >
      {letter}
    </button>
  );
});

export default Tile;
