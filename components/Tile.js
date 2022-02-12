import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const Tile = React.memo(({ letter, row, column }) => {
  const { setSelectedIndex } = useContext(AppContext);

  return (
    <button className="tile" onClick={() => setSelectedIndex([row, column])}>
      {letter}
    </button>
  );
});

export default Tile;
