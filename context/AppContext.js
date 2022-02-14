import React, { useState, createContext } from "react";

export const AppContext = createContext();

const initialGrid = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const AppProvider = ({ children }) => {
  const [grid, setGrid] = useState(initialGrid);
  const [attemptedKeys, setAttemptedKeys] = useState([]);

  const [word, setWord] = useState(["V", "E", "N", "O", "M"]);

  const [currentIndex, setCurrentIndex] = useState([0, 0]);

  function pressHandler(key) {
    switch (key) {
      case "⏎":
        enterHandler();
        break;
      case "⌫":
        deleteHandler();
        break;
      default:
        inputValue(key);
        nextColumn();
    }
  }

  function enterHandler() {
    let currentAttempt = [];
    grid[currentIndex[0]].map((v) => v && currentAttempt.push(v));

    if (currentAttempt.length === 5) {
      nextRow();
      setAttemptedKeys((prev) => [...prev, ...currentAttempt]);
    }
  }

  function deleteHandler() {
    inputValue("");
    if (currentIndex[1] !== 0) {
      setCurrentIndex((prev) => [prev[0], prev[1] - 1]);
    }
  }

  function inputValue(value) {
    let tempGrid = [...grid];
    tempGrid[currentIndex[0]][currentIndex[1]] = value;

    setGrid(tempGrid);
  }

  function nextColumn() {
    if (currentIndex[1] < 4) {
      setCurrentIndex((prev) => [prev[0], prev[1] + 1]);
    }
  }

  function nextRow() {
    if (currentIndex[0] < 5) {
      setCurrentIndex((prev) => [prev[0] + 1, 0]);
    }
  }

  return (
    <AppContext.Provider
      value={{
        grid,
        word,
        attemptedKeys,
        currentIndex,
        setCurrentIndex,
        pressHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
