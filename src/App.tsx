import './App.css';
import { useState } from 'react';

// Links
// https://react.dev/learn/tutorial-tic-tac-toe

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    // Handler check
    // console.log("clicked!");
    setValue('X');
  }
  
  return ( 
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div> 
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div> 
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div> 
    
    </>
  );
}