import Square from "./Square";

export default function Board({ onClick }) {
  return (
    <div className="board">
      <Square handleClick={onClick} value={1} />
      <Square handleClick={onClick} value={2} />
      <Square handleClick={onClick} value={3} />
      <Square handleClick={onClick} value={4} />
      <Square handleClick={onClick} value={5} />
      <Square handleClick={onClick} value={6} />
      <Square handleClick={onClick} value={7} />
      <Square handleClick={onClick} value={8} />
      <Square handleClick={onClick} value={9} />
    </div>
  );
}
