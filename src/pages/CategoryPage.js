import styled from 'styled-components';

import shopData from '../shopData';

import Heading from '../components/Heading';
import ShopItem from '../components/ShopItem';
import Grid from '../components/Grid';

const StyledComp = styled.div`
    
`

const CategoryPage = ({match}) => {
    let categoryName = match.params.Category;
    let categoryObj = shopData.find(obj => obj.title === categoryName);
    let items = categoryObj.items;
    
    return (
        <StyledComp>
            <Heading heading={categoryName}/>
            <Grid>
            {
                items.map((obj, i) => <ShopItem key={obj.id} item={obj} category={categoryName}/>)
            }
            </Grid>
        </StyledComp>
    );
}

export default CategoryPage;