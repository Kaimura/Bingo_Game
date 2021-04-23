// TODO: Module pattern via IIFE function
import { TileObject, Tiles } from "./BingoBoard";

const previousBingoWinners: Tiles = [];

export const hasBingoColumn = (tilesRowArray: Tiles) => {
    // transpose array so that columns become rows in order to be able to reuse algorithm for rows (saves time...)
    const transposedArray = tilesRowArray[0].map((col, i) => tilesRowArray.map(row => row[i]));
    return hasBingoRow(transposedArray);
}

export const hasBingoRow = (tilesRowArray: Tiles) => {
    let hasBingo = false;

    for (let i = 0; i < tilesRowArray.length; i++) {
        const markedRow = tilesRowArray[i].filter((element) => element.marked);
        const hasWonPreviously = previousBingoWinners.some((row) => row.every((element, index) => markedRow[index] === element));
        hasBingo = !hasWonPreviously && markedRow.length === tilesRowArray.length;
        if (hasBingo) {
            previousBingoWinners.push(markedRow);
            break;
        }
    }

    return hasBingo;
}

export const hasBingoDiagonal = (tilesRowArray: Tiles) => {
    let hasBingo = false;
    let diagonalArray = [];
    let markedRow: Array<TileObject> = [];
    let hasWonPreviously = false;

    // create array containing top left to bottom right
    for (let i = 0; i < tilesRowArray.length; i++) {
        diagonalArray.push(tilesRowArray[i][i]);
    }

    markedRow = diagonalArray.filter((element) => element.marked);
    hasWonPreviously = previousBingoWinners.some((row) => row.every((element, index) => markedRow[index] === element));
    hasBingo = !hasWonPreviously && markedRow.length === tilesRowArray.length;
    if (hasBingo) {
        previousBingoWinners.push(markedRow);
        return true;
    }

    // create array containing top right to bottom left
    diagonalArray = [];
    for (let i = 0; i < tilesRowArray.length; i++) {
        diagonalArray.push(tilesRowArray[i][Math.abs(i - (tilesRowArray.length -1))]);
    }

    markedRow = diagonalArray.filter((element) => element.marked);
    hasWonPreviously = previousBingoWinners.some((row) => row.every((element, index) => markedRow[index] === element));
    hasBingo = !hasWonPreviously && markedRow.length === tilesRowArray.length;
    if (hasBingo) {
        previousBingoWinners.push(markedRow);
        return true
    }

    return false;
}