import styled from "styled-components";

import CategoryButton from '../components/CategoryButton';

const StyledPage = styled.div`
    padding: 30px;
    
`;

const StyledGrid = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(${props => props.cols ? props.cols : 3}, 1fr);
    margin-bottom: 20px;

    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;

const Homepage = () => {
    return (
        <StyledPage>
            <StyledGrid cols={3}>
                <CategoryButton title='Accessories' imageURL='/images/Accessories.jpg'/>
                <CategoryButton title='Merchandise'  imageURL='/images/Merchandise.jpg'/>
                <CategoryButton title='VR' imageURL='/images/VR.png'/>
            </StyledGrid>
            <StyledGrid cols={2}>
                <CategoryButton title='Consoles' imageURL='/images/Consoles.jpg'/>
                <CategoryButton title='Games' imageURL='/images/Games.jpeg'/>
            </StyledGrid>
        </StyledPage>
    );
}

export default Homepage;