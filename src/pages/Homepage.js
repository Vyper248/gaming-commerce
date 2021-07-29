import { useEffect } from 'react';
import styled from "styled-components";

import CategoryButton from '../components/CategoryButton';

const StyledPage = styled.div`
    padding: 30px;
    max-width: 1400px;
    margin: auto;
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
                <CategoryButton title='Accessories' imageAdj={{scaleByHeight: true, left: -50}} imageURL='https://gamingintel.com/wp-content/uploads/2020/10/ps5-accessories1.jpg'/>
                <CategoryButton title='Merchandise' imageAdj={{scaleByHeight: true}}  imageURL='https://blog.playstation.com/tachyon/2017/05/unnamed-file-9.jpg?resize=1088%2C600&crop_strategy=smart'/>
                <CategoryButton title='VR' imageAdj={{scaleByHeight: true}} imageURL='https://www.vrfocus.com/wp-content/uploads/2019/10/PlayStation_VR_third_anniversary.png'/>
            </StyledGrid>
            <StyledGrid cols={2}>
                <CategoryButton title='Consoles' imageAdj={{scaleByHeight: true, left:-10}} imageURL='https://www.thesun.co.uk/wp-content/uploads/2020/11/playstation5-2.jpg'/>
                <CategoryButton title='Games' imageURL='https://playpro.ir/wp-content/uploads/2020/12/%D8%A8%D8%B2%D8%B1%DA%AF%D8%AA%D8%B1%DB%8C%D9%86-%D8%A8%D8%A7%D8%B2%DB%8C-%D9%87%D8%A7%DB%8C-%D8%A7%D9%86%D8%AD%D8%B5%D8%A7%D8%B1%DB%8C-PS5-%D8%AF%D8%B1-%D8%B3%D8%A7%D9%84-2021.jpg'/>
            </StyledGrid>
        </StyledPage>
    );
}

export default Homepage;