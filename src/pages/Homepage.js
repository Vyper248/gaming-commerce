import styled from "styled-components";

import CategoryButton from '../components/CategoryButton';

const StyledPage = styled.div`
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

const Homepage = () => {
    return (
        <StyledPage>
            <CategoryButton title='Accessories' imageURL='/images/Accessories.jpg'/>
            <CategoryButton title='Merchandise'  imageURL='/images/Merchandise.jpg'/>
            <CategoryButton title='VR' imageURL='/images/VR.png'/>
            <CategoryButton title='Consoles' imageURL='/images/Consoles.jpg'/>
            <CategoryButton title='Games' imageURL='/images/Games.jpeg'/>
        </StyledPage>
    );
}

export default Homepage;