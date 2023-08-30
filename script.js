const gameBoardModule= (() => {
    const container= document.querySelector(".container");
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const createPlayer = (name, marker) => {
        return {name, marker};
    };
    // make buttons to pick marker
    const playerOne= createPlayer("Player One", "X");
    const playerTwo= createPlayer("Player Two", "O");

    let marker= playerOne.marker;
    
    const displayBoard= () => {
        gameBoard.forEach((item, index) => {
            const squares= document.createElement("div");
            squares.classList.add("squares");
            squares.id= index;
            container.appendChild(squares);
            squares.addEventListener("click", placeMarker);
        });
        const reset= document.querySelector(".reset");
        reset.addEventListener("click", resetGame);
    };

    const placeMarker = (e) => { 
        const cell= document.createElement("div");
        cell.classList.add(marker);
        e.target.appendChild(cell);
        (marker == "X") ? marker = "O" : marker = "X";
        e.target.removeEventListener("click", placeMarker);
    };

    const resetGame = () =>{
        location.reload();
    };

    return {displayBoard};
})();

gameBoardModule.displayBoard()