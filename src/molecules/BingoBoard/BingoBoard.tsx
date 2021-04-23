import { useContext, useState } from 'react'
import { Container, Grid } from './styles';
import Tile from '../../atoms/Tile/Tile';
import { hasBingoColumn, hasBingoRow, hasBingoDiagonal } from './utils';
import { CelebrationContext } from '../../providers/CelebrationProvider.';

export type TileObject = { value: string; marked: boolean; disabled?: boolean };
export type Tiles = Array<Array<TileObject>>;

const BingoBoard = () => {
    const [tiles, setTiles] = useState<Tiles>(() => [
        [{ value: "TEST", marked: false },{ value: "placeholder2", marked: false },{ value: "placeholder3", marked: false },{ value: "placeholder4", marked: false },{ value: "placeholder5", marked: false }],
        [{ value: "placeholder6", marked: false },{ value: "placeholder7", marked: false },{ value: "placeholder8", marked: false },{ value: "placeholder9", marked: false },{ value: "placeholder10", marked: false }], 
        [{ value: "placeholder11", marked: false },{ value: "placeholder12", marked: false },{ value: "SPECIAL", marked: true, disabled: true },{ value: "placeholder13", marked: false },{ value: "placeholder14", marked: false }],
        [{ value: "placeholder15", marked: false },{ value: "placeholder16", marked: false },{ value: "placeholder17", marked: false },{ value: "placeholder18", marked: false },{ value: "placeholder19", marked: false }],
        [{ value: "placeholder20", marked: false },{ value: "placeholder21", marked: false },{ value: "placeholder22", marked: false },{ value: "placeholder23", marked: false },{ value: "placeholder24", marked: false }]
    ]); // TODO: shuffle on initial render
    // const { celebration, celebrate, rest } = useContext(CelebrationContext); // TODO: watch celebration state to trigger css animations

    const checkBingoCallback = () => {
        if (hasBingoRow(tiles) || hasBingoColumn(tiles) || hasBingoDiagonal(tiles)) alert("BINGO"); // TODO: celebrate(); after 3s rest()
    };

    const onClick = async (row: number, column: number) => {
        if (!tiles[row][column].disabled) {
            await setTiles((prevTiles) => {
                const currentValue = prevTiles[row][column].value;

                // merge process
                const newTile = { value: currentValue, marked: true, disabled: true };
                const mergedTile = {...prevTiles[row][column], ...newTile};
 
                // creation of new tile array with new merged object
                const newTiles = [...tiles];
                newTiles[row][column] = mergedTile;

                return newTiles;
            });
            checkBingoCallback();
        }
    }

    return (
        <Container>
            <Grid>
                {tiles.map((subTiles, row) => subTiles.map((subTile, column) => 
                  <Tile 
                    isMarked={subTile.marked}
                    onClick={onClick}
                    row={row}
                    column={column}
                    key={subTile.value+row}
                  >
                    {subTile.value}
                  </Tile>
                ))}
            </Grid>
        </Container>
    )
}

export default BingoBoard;