var cellColor;
(function (cellColor) {
    cellColor["white"] = "white";
    cellColor["black"] = "black";
})(cellColor || (cellColor = {}));
var pieceValues;
(function (pieceValues) {
    pieceValues[pieceValues["empty"] = 0] = "empty";
    pieceValues[pieceValues["pawn"] = 1] = "pawn";
    pieceValues[pieceValues["knight"] = 3] = "knight";
    pieceValues[pieceValues["bishop"] = 3] = "bishop";
    pieceValues[pieceValues["rook"] = 5] = "rook";
    pieceValues[pieceValues["queen"] = 9] = "queen";
    pieceValues[pieceValues["king"] = 15] = "king";
})(pieceValues || (pieceValues = {}));
var colorValue;
(function (colorValue) {
    colorValue[colorValue["empty"] = 0] = "empty";
    colorValue[colorValue["white"] = 1] = "white";
    colorValue[colorValue["black"] = 2] = "black";
})(colorValue || (colorValue = {}));
function setCell(row, color, value, pieceColor, element) {
    return { row: row, color: color, value: value, pieceColor: pieceColor, element: element };
}
function setRow(row, board, rowIndex) {
    if (rowIndex >= 2 && rowIndex <= 7) {
        for (let i = 0; i < 8; i += 2) {
            let newCell = document.createElement("button");
            newCell.id = String((rowIndex - 1) * 8 + i);
            newCell.className = (rowIndex % 2) ? "cell white" : "cell black";
            board[(rowIndex - 1) * 8 + i] = setCell(rowIndex, (rowIndex % 2) ? cellColor.black : cellColor.white, (rowIndex === 2 || rowIndex === 7) ? pieceValues.pawn : pieceValues.empty, (rowIndex === 2) ? colorValue.white : (rowIndex === 7) ? colorValue.black : colorValue.empty, newCell);
            let newCell2 = document.createElement("button");
            newCell2.id = String((rowIndex - 1) * 8 + i + 1);
            newCell2.className = (rowIndex % 2) ? "cell black" : "cell white";
            board[(rowIndex - 1) * 8 + i + 1] = setCell(rowIndex, (rowIndex % 2) ? cellColor.white : cellColor.black, (rowIndex === 2 || rowIndex === 7) ? pieceValues.pawn : pieceValues.empty, (rowIndex === 2) ? colorValue.white : (rowIndex === 7) ? colorValue.black : colorValue.empty, newCell2);
            newCell.innerHTML = newCell2.innerHTML = (rowIndex === 2) ? `<image src="images/pieces/white-pawn.png">` : (rowIndex === 7) ? `<image src="images/pieces/black-pawn.png">` : "";
            row.append(newCell, newCell2);
        }
        return;
    }
    let Cell1 = document.createElement("button");
    Cell1.id = String((rowIndex - 1) * 8 + 0);
    Cell1.className = (rowIndex === 1) ? "cell white" : "cell black";
    Cell1.innerHTML = (rowIndex === 1) ? `<image src="images/pieces/white-rook.png">` : `<image src="images/pieces/black-rook.png">`;
    board[(rowIndex - 1) * 8 + 0] = setCell(rowIndex, (rowIndex === 1) ? cellColor.white : cellColor.black, pieceValues.rook, (rowIndex === 1) ? colorValue.white : colorValue.black, Cell1);
    let Cell2 = document.createElement("button");
    Cell2.id = String((rowIndex - 1) * 8 + 1);
    Cell2.className = (rowIndex === 1) ? "cell black" : "cell white";
    Cell2.innerHTML = (rowIndex === 1) ? `<image src="images/pieces/white-knight.png">` : `<image src="images/pieces/black-knight.png">`;
    board[(rowIndex - 1) * 8 + 1] = setCell(rowIndex, (rowIndex === 1) ? cellColor.black : cellColor.white, pieceValues.knight, (rowIndex === 1) ? colorValue.white : colorValue.black, Cell2);
    let Cell3 = document.createElement("button");
    Cell3.id = String((rowIndex - 1) * 8 + 2);
    Cell3.className = (rowIndex === 1) ? "cell white" : "cell black";
    Cell3.innerHTML = (rowIndex === 1) ? `<image src="images/pieces/white-bishop.png">` : `<image src="images/pieces/black-bishop.png">`;
    board[(rowIndex - 1) * 8 + 2] = setCell(rowIndex, (rowIndex === 1) ? cellColor.white : cellColor.black, pieceValues.bishop, (rowIndex === 1) ? colorValue.white : colorValue.black, Cell3);
    let Cell4 = document.createElement("button");
    Cell4.id = String((rowIndex - 1) * 8 + 3);
    Cell4.className = (rowIndex === 1) ? "cell black" : "cell white";
    Cell4.innerHTML = (rowIndex === 1) ? `<image src="images/pieces/white-king.png">` : `<image src="images/pieces/black-king.png">`;
    board[(rowIndex - 1) * 8 + 3] = setCell(rowIndex, (rowIndex === 1) ? cellColor.black : cellColor.white, pieceValues.king, (rowIndex === 1) ? colorValue.white : colorValue.black, Cell4);
    let Cell5 = document.createElement("button");
    Cell5.id = String((rowIndex - 1) * 8 + 4);
    Cell5.className = (rowIndex === 1) ? "cell white" : "cell black";
    Cell5.innerHTML = (rowIndex === 1) ? `<image src="images/pieces/white-queen.png">` : `<image src="images/pieces/black-queen.png">`;
    board[(rowIndex - 1) * 8 + 4] = setCell(rowIndex, (rowIndex === 1) ? cellColor.white : cellColor.black, pieceValues.queen, (rowIndex === 1) ? colorValue.white : colorValue.black, Cell5);
    let Cell6 = document.createElement("button");
    Cell6.id = String((rowIndex - 1) * 8 + 5);
    Cell6.className = (rowIndex === 1) ? "cell black" : "cell white";
    Cell6.innerHTML = (rowIndex === 1) ? `<image src="images/pieces/white-bishop.png">` : `<image src="images/pieces/black-bishop.png">`;
    board[(rowIndex - 1) * 8 + 5] = setCell(rowIndex, (rowIndex === 1) ? cellColor.black : cellColor.white, pieceValues.bishop, (rowIndex === 1) ? colorValue.white : colorValue.black, Cell6);
    let Cell7 = document.createElement("button");
    Cell7.id = String((rowIndex - 1) * 8 + 6);
    Cell7.className = (rowIndex === 1) ? "cell white" : "cell black";
    Cell7.innerHTML = (rowIndex === 1) ? `<image src="images/pieces/white-knight.png">` : `<image src="images/pieces/black-knight.png">`;
    board[(rowIndex - 1) * 8 + 6] = setCell(rowIndex, (rowIndex === 1) ? cellColor.white : cellColor.black, pieceValues.knight, (rowIndex === 1) ? colorValue.white : colorValue.black, Cell7);
    let Cell8 = document.createElement("button");
    Cell8.id = String((rowIndex - 1) * 8 + 7);
    Cell8.className = (rowIndex === 1) ? "cell black" : "cell white";
    Cell8.innerHTML = (rowIndex === 1) ? `<image src="images/pieces/white-rook.png">` : `<image src="images/pieces/black-rook.png">`;
    board[(rowIndex - 1) * 8 + 7] = setCell(rowIndex, (rowIndex === 1) ? cellColor.black : cellColor.white, pieceValues.rook, (rowIndex === 1) ? colorValue.white : colorValue.black, Cell8);
    row.append(Cell1, Cell2, Cell3, Cell4, Cell5, Cell6, Cell7, Cell8);
}
export function setBoard(boardElement, board) {
    for (let rowIndex = 1; rowIndex <= 8; rowIndex++) {
        let rowElement = document.createElement("div");
        rowElement.id = "row" + rowIndex;
        rowElement.className = "row";
        setRow(rowElement, board, rowIndex);
        boardElement.append(rowElement);
    }
}
