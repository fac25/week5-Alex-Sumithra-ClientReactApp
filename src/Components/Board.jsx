
import { useState, useEffect } from "react";

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(''));

  const [count, setCount] = useState(0);

  const [player, setPlayer] = useState('X');
  

  function handleClick(i) {
    
    let turn = (count % 2 === 0) ? 'X' : 'O';
    
    
    let squareCopy = [...squares];
    squareCopy[i] = turn;
    setSquares(squareCopy);

    setCount(count + 1);
    setPlayer(turn);
    
  }
  return (
    <div>
    {/* <h2>Turn {player}</h2> */}
    <div className="board">
      {squares.map((square, i) => {
        return (
          // <Square key={i}  value={square} />
          // Learnt that to pass param to function it has to be within an arrow function.
          <button className="square" key={i} onClick={() => handleClick(i)}>
            {square}
        </button>
        );
        })
      }
      </div>
      </div>
  );
}
