import styled from 'styled-components';

const StyledBasket = styled.div`
    max-width: 780px;
    margin: auto;
    margin-bottom: 30px;

    & > h2 {
        text-align: center;
    }

    & #stripeDetails {
        color: Red;
        margin-bottom: 10px;
        text-align: right;
    }
`

export default StyledBasket;