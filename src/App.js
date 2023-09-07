import Square from "./components/Square";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const clickHandler = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
}
  const string = "I love basketBall";
  return (
    <div className="App" onClick={clickHandler}>
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={val}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
