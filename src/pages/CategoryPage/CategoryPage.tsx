import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Heading from '../../components/Heading/Heading';
import ShopItem from '../../components/ShopItem/ShopItem';
import Grid from '../../components/Grid/Grid';
import Spinner from '../../components/Spinner/Spinner';

import { Item } from '../../redux/shopSlice';

import { GET_CATEGORY } from '../../utils/gql/gql.categories';

type MatchParams = {
    Category: string;
}

const CategoryPage = ({match}: RouteComponentProps<MatchParams>) => {
    const categoryName = match.params.Category;

    const { loading, error, data } = useQuery(GET_CATEGORY, {variables: { title: categoryName }});

    if (error) return (
        <>
            <Heading heading={categoryName}/>
            <p>Error Loading Data - { error.message }</p>
        </>
    );
    
    return (
        <>
            <Heading heading={categoryName}/>
            <Spinner isLoading={loading}>
                <Grid>
                {
                    data?.category.items.map((obj: Item, i: number) => <ShopItem key={obj.id} item={obj} category={categoryName}/>)
                }
                </Grid>
            </Spinner>
        </>
    );
}

export default CategoryPage;