import calculateWinner from "../helper";
import Scoreboard from "./Scoreboard";
import Square from "./Square";
// import "../Styles/Board.css";
import { useState, useEffect } from "react";

export default function Board({ names }) {
  // ==================================================
  // Use states
  // ==================================================

  const [squares, setSquares] = useState(Array(9).fill(null)); // array of 9 squares to display the tic-tac-toe board

  const [winner, setWinner] = useState(""); // Winner can be 'X' 'O' or 'Tie'

  const [score, setScore] = useState(Array(3).fill(0)); // To record the scores

  // ==================================================
  // Use effects
  // ==================================================

  useEffect(() => {
    let winnerName = calculateWinner(squares);
    updateScoreBoard(winnerName);
    setWinner(winOrTie(winnerName));
  }, [squares]);

  // ==================================================
  // Helper Functions
  // ==================================================
  const count = squares.filter((element) => {
    return element === null;
  }).length;

  const findTurn = () => (count % 2 === 0 ? "O" : "X");
  const player = count % 2 === 0 ? names[0] : names[1];

  // ==================================================
  // updateScoreBoard
  // ==================================================
  function updateScoreBoard(winnerName) {
    let scoreCopy = [...score];
    switch (winnerName) {
      case "X":
        scoreCopy[0] += 1;
        break;
      case "O":
        scoreCopy[2] += 1;
        break;
      case "tie":
        scoreCopy[1] += 1;
        break;
    }
    setScore(scoreCopy);
  }

  // ==================================================
  // winOrTie
  // ==================================================

  function winOrTie(winnerName) {
    let winningPlayer = null;
    switch (winnerName) {
      case "X":
        winningPlayer = names[0];
        break;
      case "O":
        winningPlayer = names[1];
        break;
      case "tie":
        winningPlayer = "tie";
        break;
    }
    return winningPlayer;
  }

  // ==================================================
  // handleClick
  // ==================================================

  function handleClick(i) {
    // console.log("Player usestate ", player);
    // If square is occupied or if there is any winner don't let it be clicked on
    if (squares[i] != null || winner) {
      return;
    }
    // Find the players turn and update the clicked square with 'X' or 'O'. Updates existing array
    let squareCopy = [...squares];
    squareCopy[i] = findTurn();
    setSquares(() => squareCopy);

    // update the clicked count value
    // This in turn will update the player-useState using useEffect
    // setCount(() => count + 1);

    // Winner will be caluclated by useEffect
  }

  // ==================================================
  // showWinner
  // ==================================================

  function showWinner() {
    // console.log(winner)
    if (winner === "tie") {
      return `Tie`;
    } else if (winner) {
      return `Well done ${winner}!`;
    } else {
      return;
    }
  }
  // ==================================================
  // resetGame
  // ==================================================

  function resetGame() {
    setSquares(Array(9).fill(null));
    // setCount(0);
    // setPlayer("");
    setWinner("");
  }

  return (
    <div>
      <div className="board">
        <Square squares={squares} handleClick={handleClick} />
      </div>
      <p className="showWinner">{showWinner()}</p>
      <button
        className="playAgain"
        style={{ display: winner ? "block" : "none" }}
        onClick={resetGame}
      >
        Play Again
      </button>
      <h2 style={{ display: winner ? "none" : "block" }}>Turn {player}</h2>
      <Scoreboard players={names} score={score} />
    </div>
  );
}
