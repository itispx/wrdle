import React from "react";

const Tile = React.memo(({ letter }) => {
  return <div className="tile">{letter}</div>;
});

export default Tile;
