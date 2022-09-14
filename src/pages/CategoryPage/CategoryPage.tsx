import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { RootState } from '../../redux/store';

import Heading from '../../components/Heading/Heading';
import ShopItem from '../../components/ShopItem/ShopItem';
import Grid from '../../components/Grid/Grid';
import Spinner from '../../components/Spinner/Spinner';

type MatchParams = {
    Category: string;
}

const CategoryPage = ({match}: RouteComponentProps<MatchParams>) => {
    let categoryName = match.params.Category;
    let shopData = useSelector((state: RootState) => state.shop.collections);
    let loadingData = useSelector((state: RootState) => state.shop.loadingData);

    let categoryObj = shopData[categoryName];

    //if data hasn't been fetched from database, then nothing to display yet (not really needed with initial state)
    if (!categoryObj) return (
        <div>
            <Heading heading={categoryName}/>
            <Spinner isLoading={loadingData}></Spinner>
        </div>
    )

    let items = categoryObj.items;
    
    return (
        <>
            <Heading heading={categoryName}/>
            <Grid>
            {
                items.map((obj, i) => <ShopItem key={obj.id} item={obj} category={categoryName}/>)
            }
            </Grid>
        </>
    );
}

export default CategoryPage;