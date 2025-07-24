import './App.css';
import { use, useState } from 'react';

// Links
// https://react.dev/learn/tutorial-tic-tac-toe

function Square({ value, onSquareClick }) {
  return (
    <button className='sqaure' onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Function that helps us put the X or O in the square
  function handleClick(i) {
    // "|" we write with alt numpad 124
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // Helps use toggle between our players
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    // Set us to next turn 
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // Saveing our winner
  const winner = calculateWinner(squares);
  let status; 
  // Well show our winner or who's turn it is
  if (winner) {
    status ='Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  // Makes our board
  return (
    <>
      {/* Makes our text for saying winner or next turn */}
      <div className='status'>{status}</div>

      {/* Makes our board */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div> 
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div> 
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div> 
    
    </>
  );

  function calculateWinner(sqaures) {
    // Our win conditions
    const lines = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal
      [0, 4, 8],
      [2, 4, 6]

    ];

    // Loop through our win conditions
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (sqaures[a] && sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]) {
        return sqaures[a]; // Return the winner (X or O)
      }
    }
    // No winner yet
    return null; 
  }
}