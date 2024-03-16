import {setBoard, Cell} from "./procs.js"

const boardElement = document.querySelector("#boardContainer") as HTMLDivElement
const board: Cell[] = new Array(64)

setBoard(boardElement, board)

function waitForClick(event: MouseEvent) {
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
    }

    boardElement.addEventListener("click", clickReact)

    return clickReact
}

function afterClick(src: HTMLButtonElement, dest: HTMLButtonElement) {
    if(board[Number(src.id)].pieceColor === board[Number(dest.id)].pieceColor)
        console.log("same color")
    else
        console.log("not same color");

    boardElement.removeEventListener("click", )
}

boardElement.addEventListener("click", waitForClick)




