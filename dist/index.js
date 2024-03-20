import { setBoard, waitForClick } from "./procs.js";
import { gameSide } from "./structs.js";
export const boardElement = document.querySelector("#boardContainer");
export const board = new Array(64);
export const sides = {
    self: gameSide.white,
    enemy: gameSide.black
};
setBoard(boardElement, board);
export function nextTurn() {
    if (sides.self === gameSide.black) {
        sides.self = gameSide.white;
        sides.enemy = gameSide.black;
    }
    else if (sides.self === gameSide.white) {
        sides.self = gameSide.black;
        sides.enemy = gameSide.white;
    }
}
boardElement.addEventListener("click", waitForClick);
