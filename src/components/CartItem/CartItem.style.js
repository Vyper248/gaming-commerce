import styled from 'styled-components';

const StyledCartItem = styled.div`
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

export default StyledCartItem;