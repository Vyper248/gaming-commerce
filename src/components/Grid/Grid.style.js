import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export default StyledGrid;