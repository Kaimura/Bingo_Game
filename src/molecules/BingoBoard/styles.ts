import styled from '@emotion/styled';

export const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 20%);
    width: 100%; //clamp(50vw, 60vw, 100vw);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`

export const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`

