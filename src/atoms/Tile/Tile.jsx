import React from 'react'
import { useBingoState } from './hooks';
import { StyledTile } from './styles';

const Tile = ({ checkBingoCallback, isMarked, row, position, onClick, children }) => {
    return (
        <StyledTile isMarked={isMarked} onClick={() => onClick(row, position)}>
            {children}
        </StyledTile>
    )
}

export default Tile;