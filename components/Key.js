import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const Key = React.memo(({ k }) => {
  const { word, attemptedKeys, pressHandler } = useContext(AppContext);

  let active = attemptedKeys.includes(k) ? word.includes(k) : null;

  return (
    <button
      className={`key ${
        active ? "activeKey" : active === false && "unactiveKey"
      } `}
      onClick={() => pressHandler(k)}
    >
      {k}
    </button>
  );
});

export default Key;
