import styled from 'styled-components';

import shopData from '../shopData';

import PreviewItems from '../components/PreviewItems';

const StyledComp = styled.div`

`

const Shop = () => {
    const data = shopData;

    return (
        <StyledComp>
            {
                Object.values(data).map(obj => <PreviewItems key={obj.id} {...obj}/>)
            }
        </StyledComp>
    );
}

export default Shop;