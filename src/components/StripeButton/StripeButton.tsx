import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { placeOrder } from '../../redux/cartSlice';

import StyledStripeButton from './StripeButton.style';

type Card = {
    [key: string]: string | number | null;
}

type Token = {
    card: Card;
    client_ip: string;
    created: number;
    email: string;
    id: string;
    livemode: boolean;
    object: string;
    type: string;
    used: boolean;
}

const StripeButton = ({price=0}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51KQrETELAxdDLRdsNDe0vbmAshFzhrAT3VjOnkS58ICThpAubBu23h0K8f4lwGYEAhjiQYU5HCTEGEHq5PxvDbpa00YZmnJpGZ';

    const onToken = (token: Token) => {
        console.log('Token: ', token);
        dispatch(placeOrder());
        history.push('/Confirmation');
    }

    return (
        <StyledStripeButton>
            <StripeCheckout
                label='Pay Now'
                name='Gaming Ltd'
                currency='GBP'
                billingAddress
                shippingAddress
                description={`Your total is £${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                //@ts-ignore
                token={onToken}
                stripeKey={publishableKey}
            />
        </StyledStripeButton>
    );
}

export default StripeButton;