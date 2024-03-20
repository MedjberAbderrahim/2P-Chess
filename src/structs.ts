export enum cellColor {
    white = "white",
    black = "black"
}

export enum cellValue {
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

export enum moveType {
    check,
    capture,
    promote,
    castle,
    regularMove
}

export enum gameSide {
    none = 0x00,
    white = 0x01,
    black = 0x02
}

export type Cell = {
    readonly row: number
    readonly color: cellColor
    value: cellValue
    readonly element: HTMLButtonElement
}
