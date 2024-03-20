export var cellColor;
(function (cellColor) {
    cellColor["white"] = "white";
    cellColor["black"] = "black";
})(cellColor || (cellColor = {}));
export var cellValue;
(function (cellValue) {
    cellValue[cellValue["empty"] = 0] = "empty";
    cellValue[cellValue["wPawn"] = 17] = "wPawn";
    cellValue[cellValue["wKnight"] = 19] = "wKnight";
    cellValue[cellValue["wBishop"] = 20] = "wBishop";
    cellValue[cellValue["wRook"] = 21] = "wRook";
    cellValue[cellValue["wQueen"] = 25] = "wQueen";
    cellValue[cellValue["wKing"] = 31] = "wKing";
    cellValue[cellValue["bPawn"] = 33] = "bPawn";
    cellValue[cellValue["bKnight"] = 35] = "bKnight";
    cellValue[cellValue["bBishop"] = 36] = "bBishop";
    cellValue[cellValue["bRook"] = 37] = "bRook";
    cellValue[cellValue["bQueen"] = 41] = "bQueen";
    cellValue[cellValue["bKing"] = 47] = "bKing";
})(cellValue || (cellValue = {}));
export var moveType;
(function (moveType) {
    moveType[moveType["check"] = 0] = "check";
    moveType[moveType["capture"] = 1] = "capture";
    moveType[moveType["promote"] = 2] = "promote";
    moveType[moveType["castle"] = 3] = "castle";
    moveType[moveType["regularMove"] = 4] = "regularMove";
})(moveType || (moveType = {}));
export var gameSide;
(function (gameSide) {
    gameSide[gameSide["none"] = 0] = "none";
    gameSide[gameSide["white"] = 1] = "white";
    gameSide[gameSide["black"] = 2] = "black";
})(gameSide || (gameSide = {}));
