import React from "react";

const Key = ({ k }) => {
  return (
    <button className="key" onClick={() => console.log(k)}>
      {k}
    </button>
  );
};

export default Key;
