const gameBoardModule= (() => {
    const container= document.querySelector(".container");
    const result= document.querySelector(".result");
    const reset= document.querySelector(".reset");

    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const createPlayer = (name, marker) => {
        return {name, marker};
    };
    const playerOne= createPlayer("Player One", "X");
    const playerTwo= createPlayer("Player Two", "O");
    let currentMarker= playerOne.marker;
    result.innerText= `${currentMarker}'s Turn`;
    
    const displayBoard= () => {
        gameBoard.forEach((item, index) => {
            const squares= document.createElement("div");
            squares.classList.add("squares");
            squares.id= index;
            container.appendChild(squares);
            squares.addEventListener("click", placeMarker);
        });
        reset.addEventListener("click", () => location.reload());
    };

    const placeMarker = (e) => { 
        const cell= document.createElement("div");
        cell.classList.add(currentMarker);
        e.target.appendChild(cell);
        e.target.setAttribute("style", "background-color: black;");
        gameBoard[e.target.id]= currentMarker;
        checkWinner();
        e.target.removeEventListener("click", placeMarker);
    };

    const switchTurn = () =>{
        (currentMarker === playerOne.marker) ? currentMarker = playerTwo.marker : currentMarker= playerOne.marker;
        result.innerText= `${currentMarker}'s Turn`;
        return currentMarker;
    };

    let winner = false;
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
    const checkWinner = () => {
        for (let i= 0; i < winCombos.length; i++){
            const combo= winCombos[i];
            const cellA = gameBoard[combo[0]];
            const cellB = gameBoard[combo[1]];
            const cellC = gameBoard[combo[2]];
            if (cellA === "" || cellB === "" || cellC === ""){
                continue;
            };
            if (cellA === cellB && cellB === cellC){
                winner= true;
                break;
            };
        };
        if (winner === true){
            result.innerText= `${currentMarker} WINS`;
        } else if (winner === false && gameBoard.includes("")){
            switchTurn();
        } else {
            result.innerText= "Draw";
        };
    };
    return {displayBoard};
})();

gameBoardModule.displayBoard()