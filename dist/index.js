import { setBoard, waitForClick, gameSide } from "./procs.js";
export const boardElement = document.querySelector("#boardContainer");
export const board = new Array(64);
export let side = gameSide.white;
setBoard(boardElement, board);
export function nextTurn() {
    if (side === gameSide.black)
        side = gameSide.white;
    else if (side === gameSide.white)
        side = gameSide.black;
}
boardElement.addEventListener("click", waitForClick);
self.addEventListener("message", (message) => {
    if (message.data === "add clickReact")
        boardElement.addEventListener("click", waitForClick);
});
