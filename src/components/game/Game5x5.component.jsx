import React, { useState } from "react";
import { calculateWinner5x5 } from "../../helpers";
import Board5x5 from "../board/Board5x5.component";

import "../styles/Game.scss";

const Game5x5 = () => {
  const [squares, setSquares] = useState(Array(25).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winInfo = calculateWinner5x5(squares);
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
    setSquares(Array(25).fill(null));
    setXIsNext(true);
  }

  return (
    <>
      <Board5x5 squares={squares} onClick={handleClick} />
      <div className="game5x5">
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

export default Game5x5;