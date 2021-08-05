import styled from 'styled-components';
import { withRouter } from 'react-router';

const StyledComp = styled.div`
    width: 100%;

    & div.itemImage {
        // border: 1px solid red;
        width: 100%;
        padding-top: 100%;
        background-image: url('${props => props.imageURL}');
        background-size: cover;
        background-position: center;
        filter: brightness(0.96);
    }

    & div.itemName {
        text-align: left;
    }

    & div.itemPrice {
        text-align: right;
    }

    & div.itemFooter {
        display: grid;
        grid-template-columns: auto 60px;
    }

    & div.itemFooter > div {
        // border: 1px solid red;
        padding: 5px;
        font-variant: small-caps;
    }

    &:hover {
        cursor: pointer;
    }
`

const ShopItem = ({item, category, history}) => {
    const onClick = () => {
        history.push(`/Shop/${category}/${item.id}`)
    }

    return (
        <StyledComp imageURL={item.imageURL} onClick={onClick}>
            <div className='itemImage'></div>
            <div className='itemFooter'>
                <div className='itemName'>{item.name}</div>
                <div className='itemPrice'>£{item.price}</div>
            </div>
        </StyledComp>
    );
}

export default withRouter(ShopItem);