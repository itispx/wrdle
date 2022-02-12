import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const Key = ({ k }) => {
  const { updateGrid } = useContext(AppContext);

  return (
    <button className="key" onClick={() => updateGrid(k)}>
      {k}
    </button>
  );
};

export default Key;
