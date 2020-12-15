import React, { useState } from "react";
import { calculateWinner4x4 } from '../../helpers';
import Board4x4 from '../board/Board4x4.component';

import '../styles/Game.scss';

const Game4x4 = () => {
  const [squares, setSquares] = useState(Array(16).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winInfo = calculateWinner4x4(squares);
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
    setSquares(Array(16).fill(null));
    setXIsNext(true);
  }

  return (
    <>
      <Board4x4 squares={squares} onClick={handleClick} />
      <div className="game4x4">
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

export default Game4x4;