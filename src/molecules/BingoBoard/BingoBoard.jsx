import React, { useState } from 'react'
import { Container, Grid } from './styles';
import Tile from '../../atoms/Tile/Tile';
import { columnBingoCheck, rowBingoCheck, diagonalBingoCheck } from './utils';

const BingoBoard = () => {
    const [tiles, setTiles] = useState(() => [
        [{ value: "TEST", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false }],
        [{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false }], 
        [{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false }],
        [{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false }],
        [{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false },{ value: "placeholder", marked: false }]
    ]); // TODO: shuffle
    
    const isSpecialTileIndex = (tiles, subTiles, index, subIndex) => {
        const halfSubTile = Math.floor(subTiles.length / 2);
        const specialTileRowIndex = Math.floor(halfSubTile % tiles.length);

        return specialTileRowIndex === index && halfSubTile === subIndex;
    };

    const checkBingoCallback = () => {
        for (let i = 0; 0 < tiles.length; i++) {
            rowBingoCheck(tiles[i]);
        }
    };

    const onClick = (row, position) => {
        if (!tiles[row][position].disabled) {
            setTiles((prevTiles) => {
                const currentValue = prevTiles[row][position].value;
                const newTile = { value: currentValue, marked: true, disabled: true };
                const mergedTile = {...prevTiles[row][position], ...newTile};
                const newTiles = [...tiles];
                newTiles[row][position] = mergedTile;
                return newTiles;
            });
        }
        // checkBingoCallback(); // TODO: async await or move to useEffect
    }

    return (
        <Container>
            <Grid>
                {/* todo: TODO: include special tile into array.. */}
                {tiles.map((subTiles, index) => subTiles.map((subTile, subIndex) => <Tile isMarked={subTile.marked} onClick={onClick} row={index} position={subIndex} key={subTile+index}>{ isSpecialTileIndex(tiles, subTiles, index, subIndex) ? 'SPECIAL' : subTile.value }</Tile>))}
            </Grid>
        </Container>
    )
}

export default BingoBoard;