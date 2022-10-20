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

  const [count, setCount] = useState(0); // count is used to decide the player based on Odd or Even

  const [player, setPlayer] = useState(names[0]); // Current Player name

  const [winner, setWinner] = useState(""); // Winner can be 'X' 'O' or 'Tie'

  const [score, setScore] = useState(Array(3).fill(0)); // To record the scores

  // ==================================================
  // Use effects
  // ==================================================

  useEffect(() => {
    setPlayer(findTurn() === "X" ? names[0] : names[1]);
  }, [count]);

  useEffect(() => {
    let winnerName = calculateWinner(squares);
    setScoreBoard(winnerName);
    setWinner(winOrTie(winnerName));
  }, [squares]);

  // ==================================================
  // Helper Functions
  // ==================================================

  const findTurn = () => (count % 2 === 0 ? "X" : "O");

  // ==================================================
  // setScoreBoard
  // ==================================================
  function setScoreBoard(winnerName) {
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
    setCount(() => count + 1);

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
    setCount(0);
    setPlayer("");
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
