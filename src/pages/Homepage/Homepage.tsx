import CategoryButton from '../../components/CategoryButton/CategoryButton';
import StyledHomepage from "./Homepage.style";

const Homepage = () => {
    return (
        <StyledHomepage>
            <CategoryButton title='Accessories' imageURL='images/Accessories.jpg'/>
            <CategoryButton title='Merchandise'  imageURL='images/Merchandise.jpg'/>
            <CategoryButton title='VR' imageURL='images/VR.png'/>
            <CategoryButton title='Consoles' imageURL='images/Consoles.jpg'/>
            <CategoryButton title='Games' imageURL='images/Games.jpeg'/>
        </StyledHomepage>
    );
}

export default Homepage;