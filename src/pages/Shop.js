import { useSelector } from 'react-redux';

import PreviewItems from '../components/PreviewItems/PreviewItems';
import Spinner from '../components/Spinner';

const Shop = () => {
    const shopData = useSelector(state => state.shop.collections);
    const loadingData = useSelector(state => state.shop.loadingData);

    return (
        <Spinner isLoading={loadingData}>
            {
                Object.values(shopData).map(obj => <PreviewItems key={obj.id} {...obj}/>)
            }
        </Spinner>
    );
}

export default Shop;