import Board from "./Board";

export default function Game() {
  function handleClick() {
    console.log("hello");
  }
  return (
    <div>
      <Board onClick={handleClick} />
    </div>
  );
}
