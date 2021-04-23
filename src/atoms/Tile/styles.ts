import styled from '@emotion/styled';

export const StyledTile = styled.div<{ isMarked: boolean }>`
    border: 1px solid black;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vw;
    padding: 10px;

    & > div {
        color: ${props => props.isMarked ? 'red' : 'black'};
        text-decoration: ${props => props.isMarked ? 'line-through' : 'none'};
    }
`