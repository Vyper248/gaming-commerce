import styled from "styled-components";

const StyledHomepage = styled.div`
    padding: 30px;
    margin-bottom: 20px;
    
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);

    & > div {
        grid-column: span 3;
    }

    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3) {
        grid-column: span 2;
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;

export default StyledHomepage;