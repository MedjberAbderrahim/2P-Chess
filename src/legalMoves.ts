import { Cell, cellValue, gameSide } from "./structs.js"
import { sides } from "./index.js"
import { isCheck } from "./procs.js"


export function verifyIfCheckAfterMove(board: Cell[] ,fromIndex: number, toIndex: number, sideToVerifyCheckFor: gameSide): boolean {
    let tmpValue: cellValue
    let result: boolean

    tmpValue = board[toIndex].value
    board[toIndex].value = board[fromIndex].value
    board[fromIndex].value = cellValue.empty

    result = isCheck(board, sideToVerifyCheckFor)

    board[fromIndex].value = board[toIndex].value
    board[toIndex].value = tmpValue

    return result
}

function getLegalMovesPawn(board: Cell[], cellIndex: number): Set<Cell> {
    let result: Set<Cell> = new Set()

    let initialRow = ((board[cellIndex].value & 0xF0) === 0x10) ? 2 : 7     // inital starting row for each side's pawns
    let offset0 = ((board[cellIndex].value & 0xF0) === 0x10) ? 8 : -8       // change in index for 1 move forward
    let offset1 = ((board[cellIndex].value & 0xF0) === 0x10) ? 16 : -16     // change in index for 2 moves forward
    let offset3 = ((board[cellIndex].value & 0xF0) === 0x10) ? 9 : -7       // change in index for right capture
    let offset2 = ((board[cellIndex].value & 0xF0) === 0x10) ? 7 : -9       // change in index for left capture

    if((board[cellIndex + offset0].value === cellValue.empty) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset0, sides.enemy)){
        result.add(board[cellIndex + offset0])
        if((board[cellIndex].row === initialRow) && (board[cellIndex + offset1].value === cellValue.empty))
            result.add(board[cellIndex + offset1])
    }

    if((cellIndex % 8) && ((board[cellIndex + offset2].value & 0xF0) === (sides.enemy * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset2, sides.enemy))
        result.add(board[cellIndex + offset2])

    if((cellIndex % 8 !== 7) && ((board[cellIndex + offset3].value & 0xF0) === (sides.enemy * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset3, sides.enemy))
        result.add(board[cellIndex + offset3])

    return result
}

function getLegalMovesKnight(board: Cell[], cellIndex: number): Set<Cell> {
    let result: Set<Cell> = new Set()

    let offset0 = ((board[cellIndex].value & 0xF0) === 0x10) ? 15   : -17   /* 2 forward 1 left */
    let offset1 = ((board[cellIndex].value & 0xF0) === 0x10) ? 17   : -15   /* 2 forward 1 right */
    let offset2 = ((board[cellIndex].value & 0xF0) === 0x10) ? -17  : 15    /* 2 backward 1 left */
    let offset3 = ((board[cellIndex].value & 0xF0) === 0x10) ? -15  : 17    /* 2 backward 1 right */
    let offset4 = ((board[cellIndex].value & 0xF0) === 0x10) ? 6    : -10   /* 1 forward 2 left */
    let offset5 = ((board[cellIndex].value & 0xF0) === 0x10) ? 10   : -6    /* 1 forward 2 right */
    let offset6 = ((board[cellIndex].value & 0xF0) === 0x10) ? -10  : 6     /* 1 backward 2 left */
    let offset7 = ((board[cellIndex].value & 0xF0) === 0x10) ? -6   : 10    /* 1 backward 2 right */

    if((((board[cellIndex].value & 0xF0) === 0x10) && board[cellIndex].row < 7) || (((board[cellIndex].value & 0xF0) === 0x20) && board[cellIndex].row > 2)){
        if((cellIndex % 8) && ((board[cellIndex + offset0].value & 0xF0) !== (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset0, sides.enemy))
            result.add(board[cellIndex + offset0])  /* 2 forward 1 left */

        if((cellIndex % 8 !== 7) && ((board[cellIndex + offset1].value & 0xF0) !== (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset1, sides.enemy))
            result.add(board[cellIndex + offset1])  /* 2 forward 1 right */
    }

    if((((board[cellIndex].value & 0xF0) === 0x10) && board[cellIndex].row > 2) || (((board[cellIndex].value & 0xF0) === 0x20) && board[cellIndex].row < 7)){
        if((cellIndex % 8) && ((board[cellIndex + offset2].value & 0xF0) !== (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset2, sides.enemy))
            result.add(board[cellIndex + offset2])  /* 2 backward 1 left */

        if((cellIndex % 8 !== 7) && ((board[cellIndex + offset3].value & 0xF0) !== (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset3, sides.enemy))
            result.add(board[cellIndex + offset3])  /* 2 backward 1 right */
    }

    if((((board[cellIndex].value & 0xF0) === 0x10) && board[cellIndex].row < 8) || (((board[cellIndex].value & 0xF0) === 0x20) && board[cellIndex].row > 1)){
        if((cellIndex % 8 > 1) && ((board[cellIndex + offset4].value & 0xF0) !== (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset4, sides.enemy))
            result.add(board[cellIndex + offset4])  /* 1 forward 2 left */

        if((cellIndex % 8 < 6) && ((board[cellIndex + offset5].value & 0xF0) !== (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset5, sides.enemy))
            result.add(board[cellIndex + offset5])  /* 1 forward 2 right */
    }

    if((((board[cellIndex].value & 0xF0) === 0x10) && board[cellIndex].row > 1) || (((board[cellIndex].value & 0xF0) === 0x20) && board[cellIndex].row < 8)){
        if((cellIndex % 8 > 1) && ((board[cellIndex + offset6].value & 0xF0) !== (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset6, sides.enemy))
            result.add(board[cellIndex + offset6])  /* 1 backward 2 left */

        if((cellIndex % 8 < 6) && ((board[cellIndex + offset7].value & 0xF0) !== (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset7, sides.enemy))
            result.add(board[cellIndex + offset7])  /* 1 backward 2 right */
    }

    return result
}

function getLegalMovesBishop(board: Cell[], cellIndex: number): Set<Cell> {
    let result: Set<Cell> = new Set()

    let offset0 = ((board[cellIndex].value & 0xF0) === 0x10) ? 7 : -9               // forward left
    let offset1 = ((board[cellIndex].value & 0xF0) === 0x10) ? 9 : -7               // forward right
    let offset2 = ((board[cellIndex].value & 0xF0) === 0x10) ? -9 : 7               // backward left
    let offset3 = ((board[cellIndex].value & 0xF0) === 0x10) ? -7 : 9               // backward right

    for(let i = offset0; board[cellIndex + i] !== undefined && (((cellIndex + i - offset0) % 8) !== 0) && ((board[cellIndex + i].value & 0xF0) !== (sides.self * 0x10)) && (!verifyIfCheckAfterMove(board, cellIndex, cellIndex + i, sides.enemy)); i += offset0){
        result.add(board[cellIndex + i])  /* forward left */
        if(!( (cellIndex + i) % 8) || board[cellIndex + i].value)
        break
    }

    for(let i = offset1; board[cellIndex + i] !== undefined && (((cellIndex + i - offset1) % 8) !== 7) && ((board[cellIndex + i].value & 0xF0) !== (sides.self * 0x10)) && (!verifyIfCheckAfterMove(board, cellIndex, cellIndex + i, sides.enemy)); i += offset1){
        result.add(board[cellIndex + i])  /* forward right */
        if((( (cellIndex + i) % 8 ) === 7) || board[cellIndex + i].value)
            break
    }

    for(let i = offset2; board[cellIndex + i] !== undefined && (((cellIndex + i - offset2) % 8) !== 0) && ((board[cellIndex + i].value & 0xF0) !== (sides.self * 0x10)) && (!verifyIfCheckAfterMove(board, cellIndex, cellIndex + i, sides.enemy)); i += offset2){
        result.add(board[cellIndex + i])  /* backward left */
        if(!( (cellIndex + i) % 8) || board[cellIndex + i].value)
            break
    }

    for(let i = offset3; board[cellIndex + i] !== undefined && (((cellIndex + i - offset3) % 8) !== 7) && ((board[cellIndex + i].value & 0xF0) !== (sides.self * 0x10)) && (!verifyIfCheckAfterMove(board, cellIndex, cellIndex + i, sides.enemy)); i += offset3){
        result.add(board[cellIndex + i])  /* backward right */ 
        if(( (cellIndex + i) % 8 ) === 7 || board[cellIndex + i].value)
            break
    }

    return result
}

function getLegalMovesRook(board: Cell[], cellIndex: number): Set<Cell> {
    let result: Set<Cell> = new Set()
    
    let offset0 = ((board[cellIndex].value & 0xF0) === 0x10) ? 8 : -8               // forward
    let offset1 = ((board[cellIndex].value & 0xF0) === 0x10) ? -8 : 8               // backward
    let offset2 = -1                                                                // left
    let offset3 = 1                                                                 // right

    for(let i = offset0; board[cellIndex + i] !== undefined && ((board[cellIndex + i].value & 0xF0) !== (sides.self * 0x10)) && (!verifyIfCheckAfterMove(board, cellIndex, cellIndex + i, sides.enemy)); i += offset0){
        result.add(board[cellIndex + i])  /* forward */
        if(board[cellIndex + i].value)
            break
    }

    for(let i = offset1; board[cellIndex + i] !== undefined && ((board[cellIndex + i].value & 0xF0) !== (sides.self * 0x10)) && (!verifyIfCheckAfterMove(board, cellIndex, cellIndex + i, sides.enemy)); i += offset1){
        result.add(board[cellIndex + i])  /* backward */
        if(board[cellIndex + i].value)
            break
    }

    for(let i = offset2; board[cellIndex + i] !== undefined && (((cellIndex + i - offset2) % 8) !== 0) && ((board[cellIndex + i].value & 0xF0) !== (sides.self * 0x10)) && (!verifyIfCheckAfterMove(board, cellIndex, cellIndex + i, sides.enemy)); i += offset2){
        result.add(board[cellIndex + i])  /* left */
        if(!((cellIndex + i) % 8) || board[cellIndex + i].value)
            break
    }

    for(let i = offset3; board[cellIndex + i] !== undefined && (((cellIndex + i - offset3) % 8) !== 7) && ((board[cellIndex + i].value & 0xF0) !== (sides.self * 0x10)) && (!verifyIfCheckAfterMove(board, cellIndex, cellIndex + i, sides.enemy)); i += offset3){
        result.add(board[cellIndex + i])  /* right */
        if((((cellIndex + i) % 8) === 7) || board[cellIndex + i].value)
            break
    }
    
    return result
}

function getLegalMovesQueen(board: Cell[], cellIndex: number): Set<Cell> {
    return new Set([...getLegalMovesBishop(board, cellIndex), ...getLegalMovesRook(board, cellIndex)])
}

function getLegalMovesKing(board: Cell[], cellIndex: number): Set<Cell> {
    let result: Set<Cell> = new Set()

    let initialRow1 =   ((board[cellIndex].value & 0xF0) === 0x10) ? 1 : 8        // inital starting row for each side's king
    let initialRow2 =   ((board[cellIndex].value & 0xF0) === 0x10) ? 8 : 1        // inital starting row for enemy side's king
    let offset0     =   ((board[cellIndex].value & 0xF0) === 0x10) ? 8 : -8       // change in index forward (down for white)
    let offset1     =   ((board[cellIndex].value & 0xF0) === 0x10) ? -8 : 8       // change in index backward (up for white)
    let offset2     =   -1                                                        // change in index left
    let offset3     =   +1                                                        // change in index right
    let offset4     =   ((board[cellIndex].value & 0xF0) === 0x10) ? -7 : 9       // change in index forward right
    let offset5     =   ((board[cellIndex].value & 0xF0) === 0x10) ? -9 : 7       // change in index backward left
    let offset6     =   ((board[cellIndex].value & 0xF0) === 0x10) ? 9 : -7       // change in index forward right
    let offset7     =   ((board[cellIndex].value & 0xF0) === 0x10) ? 7 : -9       // change in index backward left

    if(board[cellIndex].row !== initialRow1){
        if((cellIndex % 8) && ((board[cellIndex + offset5].value & 0xF0) != (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset5, sides.enemy))
            result.add(board[cellIndex + offset5])      /* Backward left */
        
        if(((board[cellIndex + offset1].value & 0xF0) != (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset1, sides.enemy))
            result.add(board[cellIndex + offset1])      /* Backward */

        if((cellIndex % 8 !== 7) && ((board[cellIndex + offset4].value & 0xF0) != (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset4, sides.enemy))
            result.add(board[cellIndex + offset4])      /* Backward right */
    }

    if(board[cellIndex].row != initialRow2){
        if((cellIndex % 8) && ((board[cellIndex + offset7].value & 0xF0) != (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset7, sides.enemy))
            result.add(board[cellIndex + offset7])      /* Forward left */
        
        if(((board[cellIndex + offset0].value & 0xF0) != (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset0, sides.enemy))
            result.add(board[cellIndex + offset0])      /* Forward */

        if((cellIndex % 8 !== 7) && ((board[cellIndex + offset6].value & 0xF0) != (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset6, sides.enemy))
            result.add(board[cellIndex + offset6])      /* Forward right */
    }

    if((cellIndex % 8) && ((board[cellIndex + offset2].value & 0xF0) != (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset2, sides.enemy))
        result.add(board[cellIndex + offset2])          /* Left */

    if((cellIndex % 8 !== 7) && ((board[cellIndex + offset3].value & 0xF0) != (sides.self * 0x10)) && !verifyIfCheckAfterMove(board, cellIndex, cellIndex + offset3, sides.enemy))
        result.add(board[cellIndex + offset3])          /* Right */

    return result
}

export function getLegalMoves(board: Cell[], cellIndex: number): Set<Cell> {
    let result: Set<Cell>

    switch (board[cellIndex].value & 0x0F) {
        case cellValue.bPawn & 0x0F:  /* Pawn */
            result = getLegalMovesPawn(board, cellIndex)
            break

        case cellValue.bKnight & 0x0F: /* Knight */
            result = getLegalMovesKnight(board, cellIndex)
            break

        case cellValue.bBishop & 0x0F: /* Bishop */
            result = getLegalMovesBishop(board, cellIndex)
            break

        case cellValue.bRook & 0x0F: /* Rook */
            result = getLegalMovesRook(board, cellIndex)
            break

        case cellValue.bQueen & 0x0F: /* Queen */
            result = getLegalMovesQueen(board, cellIndex)
            break

        case cellValue.bKing & 0x0F:  /* King */
            result = getLegalMovesKing(board, cellIndex)
            break

        default:
            alert("ERROR! Check console for more informations.")
            throw new Error("ERROR! [getLegalMoves] cell.value is empty or invalid!")
    }

    return result
}

export function isLegal(board: Cell[], fromIndex: number, toIndex: number): boolean {
    // STILL NEEDS TO CHECK IN CASE OF A CHECK
    // PROBABLY NOT, BECAUSE I ALREADY CHECK IN LEGAL MOVES FOR EACH MOVE, BUT WE'LL SEE
    if( (board[fromIndex].value & 0xF0) === (board[toIndex].value & 0xF0) )
        return false

    // "getLegalMoves" function still not finished
    let legalMoves: Set<Cell> = getLegalMoves(board, fromIndex)
    if(legalMoves.has(board[toIndex]))
        return true

    return false
}