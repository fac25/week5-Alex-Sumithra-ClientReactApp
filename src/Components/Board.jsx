import calculateWinner from "../helper";
import { useState, useEffect } from "react";

export default function Board({ names }) {
  const [squares, setSquares] = useState(Array(9).fill(""));

  const [count, setCount] = useState(0);

  const [player, setPlayer] = useState(names[0]);

  const [winner, setWinner] = useState("");

  useEffect(() => {
    let turn = findTurn();
    setPlayer(turn === "X" ? names[0] : names[1]);
  }, [count]);

  useEffect(() => {
    const winnerName = calculateWinner(squares);

    setWinner(
      winnerName === null ? null : winnerName === "X" ? names[0] : names[1]
    );
  }, [squares]);

  const findTurn = () => (count % 2 === 0 ? "X" : "O");

  function handleClick(i) {
    // If square is occupied don't let it be clicked on
    if (squares[i] != "" || winner) {
      return;
    }
    // Find the players turn and update the clicked square with 'X' or 'O'. Updates existing array
    let squareCopy = [...squares];
    squareCopy[i] = findTurn();
    setSquares(() => squareCopy);

    // update the clicked count value
    // This in turn will update the player-useState using useEffect
    setCount(() => count + 1);

    // Check for winner
    // If
  }

  function resetGame() {
    setSquares(Array(9).fill(""));
    setCount(0);
    setPlayer("");
    setWinner("");
  }

  return (
    <div>
      <h2>Turn {player}</h2>
      <div className="board">
        {squares.map((square, i) => {
          return (
            // <Square key={i}  value={square} />
            // Learnt that to pass param to function it has to be within an arrow function.
            <button className="square" key={i} onClick={() => handleClick(i)}>
              {square}
            </button>
          );
        })}
      </div>
      <p>{winner ? `Well done ${winner}!` : ""}</p>
      <button
        style={{ display: winner ? "block" : "none" }}
        onClick={resetGame}
      >
        Play Again
      </button>
    </div>
  );
}
