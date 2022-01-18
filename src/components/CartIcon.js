import { AiOutlineShopping } from 'react-icons/ai';
import styled from 'styled-components';

const StyledComp = styled.div`
    position: relative;

    & > svg {
        transform: scale(1.3);
    }

    & > div {
        position: absolute;
        left: 0px;
        top: 11px;
        font-size: 0.7em;
        text-align: center;
        width: 100%;
    }
`

const CartIcon = () => {
    return (
        <StyledComp>
            <AiOutlineShopping/>
            <div>0</div>
        </StyledComp>
    );
}

export default CartIcon;