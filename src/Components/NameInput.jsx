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
    <>
      <h1>Tic Tac Toe</h1>
      <form onSubmit={updateName}>
        <label htmlFor="playerOneName">Player One's Name</label>
        <input
          id="userOne"
          name="userOne"
          type="text"
          aria-label="playerOneName"
          aria-describedby="nameLength"
          maxLength={15}
          required
        />
        <p id="nameLength">Maximum 15 characters</p>
        <br />
        <label htmlFor="playerTwoName">Player Two's Name</label>
        <input
          id="userTwo"
          name="userTwo"
          type="text"
          aria-label="playerTwoName"
          aria-describedby="nameLength"
          maxLength={15}
          required
        />
        <p id="nameLength">Maximum 15 characters</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
