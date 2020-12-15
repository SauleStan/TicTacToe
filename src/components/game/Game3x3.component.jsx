import React, { useState } from "react";
import { calculateWinner3x3 } from "../../helpers";
import Board3x3 from "../board/Board3x3.component";

import "../styles/Game.scss";

const Game3x3 = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winInfo = calculateWinner3x3(squares);
  const winner = winInfo.winner;

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    if (winInfo.isDraw) {
      status = "Draw";
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  }

  const handleClick = (i) => {
    const newSquares = squares.slice();

    if (winner || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const reset = () =>{
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <>
      <Board3x3 squares={squares} onClick={handleClick} />
      <div className="game3x3">
        <div className="status">
          {status}
        </div>
        <div>
          <button className="game-button" onClick={reset}>RESET</button>
        </div>
      </div>
    </>
  );
};

export default Game3x3;
