const gameBoardModule= (() => {
    const container= document.querySelector(".container");
    const result= document.querySelector(".result");
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const createPlayer = (name, marker) => {
        return {name, marker};
    };
    
    const playerOne= createPlayer("Player One", "X");
    const playerTwo= createPlayer("Player Two", "O");

    let currentMarker= playerOne.marker;
    
    const displayBoard= () => {
        gameBoard.forEach((item, index) => {
            const squares= document.createElement("div");
            squares.classList.add("squares");
            squares.id= index;
            container.appendChild(squares);
            result.innerText= `${currentMarker}'s Turn`;
            squares.addEventListener("click", placeMarker);
        });
        const reset= document.querySelector(".reset");
        reset.addEventListener("click", resetGame);
    };

    const placeMarker = (e) => { 
        const cell= document.createElement("div");
        cell.classList.add(currentMarker);
        e.target.appendChild(cell);
        gameBoard[e.target.id]= currentMarker;
        switchTurn();
        e.target.removeEventListener("click", placeMarker);
        console.log(gameBoard);
    };

    const switchTurn= () =>{
        (currentMarker === playerOne.marker) ? currentMarker = playerTwo.marker : currentMarker= playerOne.marker;
        result.innerText= `${currentMarker}'s Turn`;
        return currentMarker;
    };

    const winCombos= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const resetGame = () =>{
        location.reload();
    };
    return {displayBoard};
})();

gameBoardModule.displayBoard()