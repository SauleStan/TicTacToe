import React from "react";
import Square from "../square/Square.component";

import '../styles/Board.scss';

const Board4x4 = ({ squares, onClick }) => (
  <div className="board4x4">
    {squares.map((square, i) => ( // loop over the squares from props (array for playing field)
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board4x4;
