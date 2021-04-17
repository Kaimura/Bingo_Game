import styled from '@emotion/styled';

export const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
    width: 100%; //clamp(50vw, 50vw, 100vw);
`

export const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`

