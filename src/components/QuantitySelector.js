import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import IconButton from './IconButton';

const StyledComp = styled.div`
    display: flex;
    justify-content: center;

    & > div.qty {
        margin: 0px 5px;
        padding: 5px;
    }

    & > div:first-child {
        ${props => props.qty === 1 ? 'color: #EEE;' : ''}

        :hover {
            ${props => props.qty === 1 ? 'cursor: default;' : ''}
        }
    }
`

const QuantitySelector = ({qty, onIncrease, onDecrease}) => {
    return (
        <StyledComp qty={qty}>
            <IconButton Icon={FaChevronLeft} onClick={onDecrease}/>
            <div className='qty'>{qty}</div>
            <IconButton Icon={FaChevronRight} onClick={onIncrease}/>
        </StyledComp>
    );
}

export default QuantitySelector;