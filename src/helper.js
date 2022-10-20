function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  let count = 0;
  squares.map((square) => {
    //
    // console.log(square);
    if (square !== null) {
      count++;
    }
  });
  //   let count = 0;
  //   for (let i = 0; i < squares.length; i++) {
  //     if (squares[i] !== null) {
  //       count++;
  //     }
  //   }
  if (count === 9) return "tie";
  return null;
}

export default calculateWinner;
