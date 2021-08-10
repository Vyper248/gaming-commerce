import styled from 'styled-components';

const StyledComp = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Grid = ({children}) => {
    return (
        <StyledComp>{children}</StyledComp>
    );
}

export default Grid;