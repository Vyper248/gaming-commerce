import styled from 'styled-components';

const StyledComp = styled.div`
    display: flex;
    height: 100px;
    margin-bottom: 20px;

    & > #itemImage {
        margin-right: 20px;
        width: 70px;
        min-width: 70px;
        background-image: url('${props => props.imageURL}');
        background-size: cover;
        background-position: center;
        filter: brightness(0.96);
    }
`

const CartItem = ({cartItem}) => {

    const item = cartItem.item;
    return (
        <StyledComp imageURL={item.imageURL}>
            <div id='itemImage'></div>
            <div id='itemDetails'>
                <p>{item.name}</p>
                <p>{cartItem.qty} x £{item.price}</p>
            </div>
        </StyledComp>
    );
}

export default CartItem;