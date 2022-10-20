export default function Scoreboard({ players, score }) {
  return (
    <>
      <div className="headings">
        <h3>{players[0]}</h3>
        <h3>Tie</h3>
        <h3>{players[1]}</h3>
      </div>
      <div className="scores">
        <p>{score[0]}</p>
        <p>{score[1]}</p>
        <p>{score[2]}</p>
      </div>
    </>
  );
}
