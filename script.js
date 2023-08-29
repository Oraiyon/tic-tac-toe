const gameBoardModule= (() => {
    const container= document.querySelector(".container");
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const createPlayer = (name, marker) => {
        return {name, marker};
    };

    let marker;
    const playX= document.querySelector(".playX");
    const playO= document.querySelector(".playO");
    const or= document.querySelector(".or");
    playX.addEventListener("click", () => {
        container.setAttribute("style", "display:grid; border: 2px solid black;");
        const playerOne = createPlayer("Player One", "X");
        const playerTwo = createPlayer("Player Two", "O");
        marker = playerOne.marker;
        playX.setAttribute("style", "display:none;");
        playO.setAttribute("style", "display:none;");
        or.setAttribute("style", "display:none;");
    });
    playO.addEventListener("click", () => {
        container.setAttribute("style", "display:grid; border: 2px solid black;");
        const playerOne = createPlayer("Player One", "O");
        const playerTwo = createPlayer("Player Two", "X");
        marker = playerOne.marker;
        playX.setAttribute("style", "display:none;");
        playO.setAttribute("style", "display:none;");
        or.setAttribute("style", "display:none;")
    });

    const displayBoard= () => {
        gameBoard.forEach((item, index) => {
            const squares= document.createElement("div");
            squares.classList.add("squares");
            squares.id= index;
            container.appendChild(squares);
            squares.addEventListener("click", placeMarker);
        });
    };

    const placeMarker = (e) => { 
        const cell= document.createElement("div");
        cell.classList.add(marker);
        e.target.appendChild(cell);
        (marker == "X") ? marker = "O" : marker = "X";
        e.target.removeEventListener("click", placeMarker);
        // gameBoard not updating
        // stuck in gameBoard[0];
        gameBoard.splice(e.target, 1, marker);
        console.log(gameBoard);
    };

    return {displayBoard};
})();

gameBoardModule.displayBoard()