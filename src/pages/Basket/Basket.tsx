import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StyledBasket from './Basket.style';

import { RootState } from '../../redux/store';

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import BasketItems from '../../components/BasketItems/BasketItems';

const Basket = () => {
    const history = useHistory();

    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    
    const onCheckout = () => {
        if (!currentUser) {
            history.push('/SignIn');
        } else {
            history.push('/Checkout');
        }
    }

    return (
        <StyledBasket>
            <h2>Basket</h2>
            <Container>
                <BasketItems type='basket'/>
                <div style={{textAlign: 'right'}}>
                    <Button label='Checkout' style={{marginLeft: 'auto'}} onClick={onCheckout}/>
                </div>
            </Container>
        </StyledBasket>
    );
}

export default Basket;