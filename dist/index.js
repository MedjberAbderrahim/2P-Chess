import { setBoard } from "./procs.js";
const boardElement = document.querySelector("#boardContainer");
const board = new Array(64);
setBoard(boardElement, board);
function waitForClick(event) {
    let target = event.target;
    if (target.tagName === "BUTTON" && !target.children[0])
        return;
    if (target.tagName === "IMG") {
        target.style.opacity = "40%";
        if (!target.parentElement)
            throw new Error("target.parentElement is null");
        target = target.parentElement;
    }
    else {
        let child = target.children[0];
        child.style.opacity = "40%";
    }
    boardElement.removeEventListener("click", waitForClick);
    function clickReact(event) {
        let dest = event.target;
        if (dest.tagName === "IMG") {
            if (!dest.parentElement)
                throw new Error("dest.parentElement is null");
            dest = dest.parentElement;
        }
        afterClick(target, dest);
    }
    boardElement.addEventListener("click", clickReact);
    return clickReact;
}
function afterClick(src, dest) {
    if (board[Number(src.id)].pieceColor === board[Number(dest.id)].pieceColor)
        console.log("same color");
    else
        console.log("not same color");
    boardElement.removeEventListener("click");
}
boardElement.addEventListener("click", waitForClick);
