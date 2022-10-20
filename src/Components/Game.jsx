import Board from "./Board";
import NameInput from "./NameInput";
import { useState } from "react";

export default function Game() {
  const [names, setNames] = useState(Array(2).fill(""));

  return (
    <div>
      {names[0] === "" ? (
        <NameInput setNames={setNames} names={names} />
      ) : (
        <>
          <Board />
        </>
      )}
    </div>
  );
}
