import React, { useState, createContext } from "react";

export const AppContext = createContext();

const initialGrid = [
  ["", "", "A", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const AppProvider = ({ children }) => {
  const [grid, setGrid] = useState(initialGrid);
  const [word, setWord] = useState("venom");
  const [selectedIndex, setSelectedIndex] = useState([1, 2]);

  function updateGrid(value) {
    let tempGrid = [...grid];
    tempGrid[selectedIndex[0]][selectedIndex[1]] = value;

    setGrid(tempGrid);
  }

  return (
    <AppContext.Provider value={{ grid, word, setSelectedIndex, updateGrid }}>
      {children}
    </AppContext.Provider>
  );
};
