import styled from 'styled-components';
import { useSelector } from 'react-redux';

import PreviewItems from '../components/PreviewItems';

const StyledComp = styled.div`

`

const Shop = () => {
    const shopData = useSelector(state => state.shop.collections);

    return (
        <StyledComp>
            {
                Object.values(shopData).map(obj => <PreviewItems key={obj.id} {...obj}/>)
            }
        </StyledComp>
    );
}

export default Shop;