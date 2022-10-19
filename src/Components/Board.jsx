
import { useState } from "react";

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(''));
  
  function handleClick(i){
    console.log(i);
  }

  return (
    <div className="board">
      {squares.map((square, i) => {
        return (
          // <Square key={i}  value={square} />
          // Learnt that to pass param to function it has to be within an arrow function.
          <button className="square" key={i} onClick={() => handleClick(i)}>
            {square[i]}
        </button>
        );
        })
      }
    </div>
  );
}
