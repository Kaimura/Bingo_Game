import styled from '@emotion/styled';

export const StyledTile = styled.div`
    color: ${props => props.isMarked ? 'red' : 'black'};
`
