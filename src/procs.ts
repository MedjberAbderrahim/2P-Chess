import {boardElement, board} from "./index.js"

enum cellColor {
    white = "white",
    black = "black"
}

enum cellValue {
    empty   =   0x00,

    wPawn   =   0x11,
    wKnight =   0x13,
    wBishop =   0x14,
    wRook   =   0x15,
    wQueen  =   0x19,
    wKing   =   0x1F,

    bPawn   =   0x21,
    bKnight =   0x23,
    bBishop =   0x24,
    bRook   =   0x25,
    bQueen  =   0x29,
    bKing   =   0x2F
}

export type Cell = {
    row: number
    color: cellColor
    value: cellValue
    element: HTMLButtonElement
}

function setCell(row: number, color: cellColor, value: cellValue, element: HTMLButtonElement) {
    return  {row: row, color: color, value: value, element: element}
}

function setRow(row: HTMLDivElement, board: Cell[], rowIndex: number) {
    if(rowIndex >= 2 && rowIndex <= 7) {
        for(let i = 0; i < 8; i += 2){
            let newCell = document.createElement("button")
            newCell.id = String((rowIndex - 1) * 8 + i)
            newCell.className = (rowIndex % 2) ? "cell white": "cell black"
            board[(rowIndex - 1) * 8 + i] = setCell(rowIndex, (rowIndex % 2) ? cellColor.black: cellColor.white, (rowIndex === 2) ? cellValue.wPawn: (rowIndex === 7) ? cellValue.bPawn: cellValue.empty, newCell)

            let newCell2 = document.createElement("button")
            newCell2.id = String((rowIndex - 1) * 8 + i + 1)
            newCell2.className = (rowIndex % 2) ? "cell black": "cell white"
            board[(rowIndex - 1) * 8 + i + 1] = setCell(rowIndex, (rowIndex % 2) ? cellColor.white: cellColor.black, (rowIndex === 2) ? cellValue.wPawn: (rowIndex === 7) ? cellValue.bPawn: cellValue.empty, newCell2)

            newCell.innerHTML = newCell2.innerHTML = (rowIndex === 2) ? `<image src="Images/pieces/white-pawn.png">`: (rowIndex === 7) ? `<image src="Images/pieces/black-pawn.png">`: ""

            row.append(newCell, newCell2)
        }
        return
    }

    let Cell1 = document.createElement("button")
    Cell1.id = String((rowIndex - 1) * 8 + 0)
    Cell1.className = (rowIndex === 1) ? "cell white": "cell black"
    Cell1.innerHTML = (rowIndex === 1) ? `<image src="Images/pieces/white-rook.png">`: `<image src="Images/pieces/black-rook.png">`
    board[(rowIndex - 1) * 8 + 0] = setCell(rowIndex, (rowIndex === 1) ? cellColor.white: cellColor.black, (rowIndex === 1) ? cellValue.wRook: cellValue.bRook, Cell1)

    let Cell2 = document.createElement("button")
    Cell2.id = String((rowIndex - 1) * 8 + 1)
    Cell2.className = (rowIndex === 1) ? "cell black": "cell white"
    Cell2.innerHTML = (rowIndex === 1) ? `<image src="Images/pieces/white-knight.png">`: `<image src="Images/pieces/black-knight.png">`
    board[(rowIndex - 1) * 8 + 1] = setCell(rowIndex, (rowIndex === 1) ? cellColor.black: cellColor.white, (rowIndex === 1) ? cellValue.wKnight: cellValue.bKnight, Cell2)

    let Cell3 = document.createElement("button")
    Cell3.id = String((rowIndex - 1) * 8 + 2)
    Cell3.className = (rowIndex === 1) ? "cell white": "cell black"
    Cell3.innerHTML = (rowIndex === 1) ? `<image src="Images/pieces/white-bishop.png">`: `<image src="Images/pieces/black-bishop.png">`
    board[(rowIndex - 1) * 8 + 2] = setCell(rowIndex, (rowIndex === 1) ? cellColor.white: cellColor.black, (rowIndex === 1) ? cellValue.wBishop: cellValue.bBishop, Cell3)

    let Cell4 = document.createElement("button")
    Cell4.id = String((rowIndex - 1) * 8 + 3)
    Cell4.className = (rowIndex === 1) ? "cell black": "cell white"
    Cell4.innerHTML = (rowIndex === 1) ? `<image src="Images/pieces/white-king.png">`: `<image src="Images/pieces/black-king.png">`
    board[(rowIndex - 1) * 8 + 3] = setCell(rowIndex, (rowIndex === 1) ? cellColor.black: cellColor.white, (rowIndex === 1) ? cellValue.wKing: cellValue.bKing, Cell4)

    let Cell5 = document.createElement("button")
    Cell5.id = String((rowIndex - 1) * 8 + 4)
    Cell5.className = (rowIndex === 1) ? "cell white": "cell black"
    Cell5.innerHTML = (rowIndex === 1) ? `<image src="Images/pieces/white-queen.png">`: `<image src="Images/pieces/black-queen.png">`
    board[(rowIndex - 1) * 8 + 4] = setCell(rowIndex, (rowIndex === 1) ? cellColor.white: cellColor.black, (rowIndex === 1) ? cellValue.wQueen: cellValue.bQueen, Cell5)

    let Cell6 = document.createElement("button")
    Cell6.id = String((rowIndex - 1) * 8 + 5)
    Cell6.className = (rowIndex === 1) ? "cell black": "cell white"
    Cell6.innerHTML = (rowIndex === 1) ? `<image src="Images/pieces/white-bishop.png">`: `<image src="Images/pieces/black-bishop.png">`
    board[(rowIndex - 1) * 8 + 5] = setCell(rowIndex, (rowIndex === 1) ? cellColor.black: cellColor.white, (rowIndex === 1) ? cellValue.wBishop: cellValue.bBishop, Cell6)

    let Cell7 = document.createElement("button")
    Cell7.id = String((rowIndex - 1) * 8 + 6)
    Cell7.className = (rowIndex === 1) ? "cell white": "cell black"
    Cell7.innerHTML = (rowIndex === 1) ? `<image src="Images/pieces/white-knight.png">`: `<image src="Images/pieces/black-knight.png">`
    board[(rowIndex - 1) * 8 + 6] = setCell(rowIndex, (rowIndex === 1) ? cellColor.white: cellColor.black, (rowIndex === 1) ? cellValue.wKnight: cellValue.bKnight, Cell7)

    let Cell8 = document.createElement("button")
    Cell8.id = String((rowIndex - 1) * 8 + 7)
    Cell8.className = (rowIndex === 1) ? "cell black": "cell white"
    Cell8.innerHTML = (rowIndex === 1) ? `<image src="Images/pieces/white-rook.png">`: `<image src="Images/pieces/black-rook.png">`
    board[(rowIndex - 1) * 8 + 7] = setCell(rowIndex, (rowIndex === 1) ? cellColor.black: cellColor.white, (rowIndex === 1) ? cellValue.wRook: cellValue.bRook, Cell8)

    row.append(Cell1, Cell2, Cell3, Cell4, Cell5, Cell6, Cell7, Cell8)
}

export function setBoard(boardElement: HTMLDivElement, board: Cell[]) {
    for(let rowIndex = 1; rowIndex <= 8; rowIndex++){
        let rowElement = document.createElement("div")
        rowElement.id = "row" + rowIndex
        rowElement.className = "row"
        setRow(rowElement, board, rowIndex)
        boardElement.append(rowElement)
    }
}

function makeMove(from: Cell, to: Cell) {
    new Audio("Audio/move.mp3").play()
    to.value = from.value
    to.element.innerHTML = from.element.innerHTML
    
    from.element.innerHTML = ""
    from.value = 0

    let img = to.element.children[0] as HTMLImageElement
    img.style.opacity = "1"
}

function getLegalMoves(cell: Cell): Cell[] {
    cell;
    return []
}

function isLegal(from: Cell, to: Cell): boolean {
    // STILL NEEDS TO CHECK IN CASE OF A CHECK
    if( (from.value & 0x30) === (to.value & 0x30) )
        return false

    // "getLegalMoves" function still not started
    let legalMoves: Cell[] = getLegalMoves(from)
    for(let i = 0; i < legalMoves.length; i++){
        if(to === legalMoves[i])
            return true
    }

    return false

}

function afterClick(src: HTMLButtonElement, dest: HTMLButtonElement) {
    if(!isLegal( board[Number(src.id)], board[Number(dest.id)] )){
        alert("Invalid move!")
        let img = src.children[0] as HTMLImageElement
        img.style.opacity = "1"
    }
    else
        makeMove( board[Number(src.id)], board[Number(dest.id)] )   
}

export function waitForClick(event: MouseEvent) {
    let target = event.target as HTMLElement
    if(target.tagName === "BUTTON" && !target.children[0])
        return

    if(target.tagName === "IMG"){
        target.style.opacity = "40%"
        
        if(!target.parentElement)
            throw new Error("target.parentElement is null");
        
        target = target.parentElement as HTMLButtonElement
    }
    else{
        let child = target.children[0] as HTMLImageElement
        child.style.opacity = "40%"
    }

    boardElement.removeEventListener("click", waitForClick)

    function clickReact(event: MouseEvent) {
        let dest = event.target as HTMLElement
        if(dest.tagName === "IMG"){
            if(!dest.parentElement)
                throw new Error("dest.parentElement is null");
    
            dest = dest.parentElement as HTMLButtonElement
        }
        afterClick(target as HTMLButtonElement, dest as HTMLButtonElement)

        boardElement.removeEventListener("click", clickReact)
        window.postMessage("add clickReact")
    }

    boardElement.addEventListener("click", clickReact)
}