import { useQuery } from '@apollo/client';

import PreviewItems from '../../components/PreviewItems/PreviewItems';
import Spinner from '../../components/Spinner/Spinner';

import { GET_CATEGORIES } from '../../utils/gql/gql.categories';
import { convertArrToObj } from '../../utils/gql/gql.utils';
import { Collections } from '../../redux/shopSlice';

const Shop = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (error) {
        return <p>Error Loading Data - {error.message}</p>;
    }

    const shopData = convertArrToObj(data?.categories) as Collections;

    return (
        <Spinner isLoading={loading}>
            {
                Object.values(shopData).map(obj => <PreviewItems key={obj.id} {...obj}/>)
            }
        </Spinner>
    );
}

export default Shop;