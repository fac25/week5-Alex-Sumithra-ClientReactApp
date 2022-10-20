export default function NameInput({ setNames, names }) {
  function updateName(e) {
    e.preventDefault();
    let nameCopy = [...names];
    nameCopy[0] = capitalizeFirstLetter(e.target.userOne.value);
    nameCopy[1] = capitalizeFirstLetter(e.target.userTwo.value);
    setNames(nameCopy);
  }

  function capitalizeFirstLetter(user) {
    return user.charAt(0).toUpperCase() + user.slice(1);
  }
  return (
    <div className="formContainer">
      <h1>Tic Tac Toe</h1>
      <p id="nameLength">Enter your names: Maximum of 15 characters.</p>
      <form onSubmit={updateName}>
        <label htmlFor="playerOneName">Player 1</label>
        <input
          id="userOne"
          name="userOne"
          type="text"
          aria-label="playerOneName"
          aria-describedby="nameLength"
          maxLength={15}
          placeholder="Enter your name"
          required
        />
        <br />
        <br />
        <label htmlFor="playerTwoName">Player 2</label>
        <input
          id="userTwo"
          name="userTwo"
          type="text"
          aria-label="playerTwoName"
          aria-describedby="nameLength"
          maxLength={15}
          placeholder="Enter your name"
          required
        />
        <br />
        <br />
        <button type="submit">Play</button>
      </form>
    </div>
  );
}
