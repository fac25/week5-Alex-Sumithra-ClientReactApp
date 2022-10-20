import calculateWinner from "../helper";
import Scoreboard from "./Scoreboard";
import { useState, useEffect } from "react";

export default function Board({ names }) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [count, setCount] = useState(0);

  const [player, setPlayer] = useState(names[0]);

  const [winner, setWinner] = useState("");

  const [score, setScore] = useState(Array(3).fill(0));

  function setScoreBoard(winnerName) {
    let scoreCopy = [...score];
    switch (winnerName) {
      case "X":
        // Player 1 score increases by 1
        scoreCopy[0] += 1;
        setScore(scoreCopy);
        break;
      case "O":
        scoreCopy[2] += 1;
        setScore(scoreCopy);
        //Player 2 score increases by 1
        break;
      case "tie":
        scoreCopy[1] += 1;
        setScore(scoreCopy);
        break;
      // Case tie increases by 1
    }
  }

  function winOrTie(winnerName) {
    let winningPlayer = null;
    switch (winnerName) {
      case "X":
        winningPlayer = "X";
        break;
      case "O":
        winningPlayer = "O";
        break;
      case "tie":
        winningPlayer = "tie";
        break;
      default:
        winningPlayer = null;
        break;
    }
    return winningPlayer;
  }

  useEffect(() => {
    let turn = findTurn();
    setPlayer(turn === "X" ? names[0] : names[1]);
  }, [count]);

  useEffect(() => {
    let winnerName = calculateWinner(squares);
    setScoreBoard(winnerName);
    console.log(winnerName);
    setWinner(winOrTie(winnerName));
  }, [squares]);

  const findTurn = () => (count % 2 === 0 ? "X" : "O");

  function handleClick(i) {
    // If square is occupied don't let it be clicked on
    if (squares[i] != null || winner) {
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

  function showWinner() {
    if (winner === "tie") {
      return `Tie`;
    } else if (winner) {
      return `Well done ${winner}!`;
    } else {
      return;
    }
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setCount(0);
    setPlayer("");
    setWinner("");
  }

  return (
    <div>
      <h2 style={{ display: winner ? "none" : "block" }}>Turn {player}</h2>
      <div className="board">
        {/* draw board */}
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
      <p>{showWinner()}</p>
      <button
        style={{ display: winner ? "block" : "none" }}
        onClick={resetGame}
      >
        Play Again
      </button>
      <Scoreboard players={names} score={score} />
    </div>
  );
}
