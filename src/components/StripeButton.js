import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../redux/cartSlice';

const StyledComp = styled.div`
    text-align: right;
`

const StripeButton = ({price=0}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51KQrETELAxdDLRdsNDe0vbmAshFzhrAT3VjOnkS58ICThpAubBu23h0K8f4lwGYEAhjiQYU5HCTEGEHq5PxvDbpa00YZmnJpGZ';

    const onToken = token => {
        console.log(token);
        dispatch(placeOrder());
        history.push('/Confirmation');
    }

    return (
        <StyledComp>
            <StripeCheckout
                label='Pay Now'
                name='Gaming Ltd'
                currency='GBP'
                billingAddress
                shippingAddress
                description={`Your total is £${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </StyledComp>
    );
}

export default StripeButton;