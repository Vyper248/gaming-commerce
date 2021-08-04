import styled from 'styled-components';

import ShopItem from './ShopItem';

const StyledComp = styled.div`
    & > h1 {
        font-variant: small-caps;
    }

    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
    }

    @media screen and (max-width: 900px) {
        & > div {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`

const PreviewItems = ({title, items}) => {

    return (
        <StyledComp>
            <h1>{title}</h1>
            <div>
            {
                items.filter((obj,i) => i < 4).map(item => <ShopItem item={item} category={title}/>)
            }
            </div>
        </StyledComp>
    );
}

export default PreviewItems;