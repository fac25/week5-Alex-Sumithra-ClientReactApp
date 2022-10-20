
export default function Square({squares, handleClick}){

    return (
        <>
            {squares.map((square, i) => {
                return (
                // Learnt that to pass param to function it has to be within an arrow function.
                <button className="square" key={i} onClick={() => handleClick(i)}>
                    {square}
                </button>
                );
            })}
        </>
    );


}