import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStarted, setGameStarted] = useState(false)
  let winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } 
  else if (!winner && gameStarted){
    status = "Next Player: " + (xIsNext ? "X" : "O");
  } else {
    status = "Asim ni Moss"
  }
 

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquare = squares.slice();
    {
      xIsNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
    setGameStarted(true)
  }

  function calculateWinner(squares: any) {
    const lineWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lineWin.length; i++) {
      const [a, b, c] = lineWin[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>

      <div>
        {status}
      </div>

      <div className="row">
        {<Square value={squares[0]} onSquareClick={() => handleClick(0)} />}
        {<Square value={squares[1]} onSquareClick={() => handleClick(1)} />}
        {<Square value={squares[2]} onSquareClick={() => handleClick(2)} />}
      </div>

      <div className="row">
        {<Square value={squares[3]} onSquareClick={() => handleClick(3)} />}
        {<Square value={squares[4]} onSquareClick={() => handleClick(4)} />}
        {<Square value={squares[5]} onSquareClick={() => handleClick(5)} />}
      </div>

      <div className="row">
        {<Square value={squares[6]} onSquareClick={() => handleClick(6)} />}
        {<Square value={squares[7]} onSquareClick={() => handleClick(7)} />}
        {<Square value={squares[8]} onSquareClick={() => handleClick(8)} />}
      </div>
    </>
  );
};

export default Board;
