import React from "react";

const Title = React.memo(({ letter }) => {
  return <div className="tile">{letter}</div>;
});

export default Title;
