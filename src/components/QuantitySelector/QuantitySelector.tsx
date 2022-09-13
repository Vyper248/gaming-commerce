import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import StyledQuantitySelector from './QuantitySelector.style';
import IconButton from '../IconButton/IconButton';

type QuantitySelectorProps = {
    qty: number;
    onIncrease: ()=>void;
    onDecrease: ()=>void;
}

const QuantitySelector = ({qty, onIncrease, onDecrease}: QuantitySelectorProps) => {
    return (
        <StyledQuantitySelector qty={qty}>
            <IconButton Icon={FaChevronLeft} onClick={onDecrease}/>
            <div className='qty'>{qty}</div>
            <IconButton Icon={FaChevronRight} onClick={onIncrease}/>
        </StyledQuantitySelector>
    );
}

export default QuantitySelector;