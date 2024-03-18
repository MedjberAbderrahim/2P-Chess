import {Cell, setBoard, waitForClick} from "./procs.js"

export const boardElement = document.querySelector("#boardContainer") as HTMLDivElement
export const board: Cell[] = new Array(64)

setBoard(boardElement, board)

boardElement.addEventListener("click", waitForClick)

self.addEventListener("message", (message) => {
    if(message.data === "add clickReact")
        boardElement.addEventListener("click", waitForClick) 
})