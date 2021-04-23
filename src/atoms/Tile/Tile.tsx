import { FC } from 'react'
import { StyledTile } from './styles';

interface TileProps {
    isMarked: boolean;
    row: number;
    column: number;
    onClick: (row: number, column: number) => void;
}

const Tile: FC<TileProps> = ({ isMarked, row, column, onClick, children }) => {
    return (
        <StyledTile isMarked={isMarked} onClick={() => onClick(row, column)}>
            <div>{children}</div>
        </StyledTile>
    )
}

export default Tile;