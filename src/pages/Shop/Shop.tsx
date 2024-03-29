import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
// import { addCollectionAndItems } from '../../firebase/firebase.utils';

import PreviewItems from '../../components/PreviewItems/PreviewItems';
import Spinner from '../../components/Spinner/Spinner';

const Shop = () => {
    const shopData = useSelector((state: RootState) => state.shop.collections);
    const loadingData = useSelector((state: RootState) => state.shop.loadingData);

    // addCollectionAndItems('categories', Object.values(shopData));

    return (
        <Spinner isLoading={loadingData}>
            {
                Object.values(shopData).map(obj => <PreviewItems key={obj.id} {...obj}/>)
            }
        </Spinner>
    );
}

export default Shop; 