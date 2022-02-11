import styled from 'styled-components';

import Heading from '../components/Heading';
import ShopItem from '../components/ShopItem';
import Grid from '../components/Grid';
import { useSelector } from 'react-redux';

const StyledComp = styled.div`
    
`

const CategoryPage = ({match}) => {
    let categoryName = match.params.Category;
    let shopData = useSelector(state => state.shop.collections);

    let categoryObj = shopData[categoryName];

    //if data hasn't been fetched from database, then nothing to display yet (not really needed with initial state)
    if (!categoryObj) return <div><Heading heading={categoryName}/></div>;

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