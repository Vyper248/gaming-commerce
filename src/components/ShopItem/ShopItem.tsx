import { MouseEvent } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cartSlice';
import { Item } from '../../redux/shopSlice';

import StyledShopItem from './ShopItem.style';

type ShopItemProps = {
    item: Item;
    category: string;
}

const ShopItem = ({item, category}: ShopItemProps) => {
    const dispatch = useDispatch();
    
    const onClickCart = (e: MouseEvent) => {
        e.stopPropagation();

        dispatch(addItem({
            id: item.id,
            qty: 1
        }));
    }

    return (
        <StyledShopItem imageURL={item.imageURL}>
            <div className='itemImage'>
                <div className='hover'>
                    <div className='addCart' onClick={onClickCart}>Add to Cart</div>
                </div>
            </div>
            <div className='itemFooter'>
                <div className='itemName'>{item.name}</div>
                <div className='itemPrice'>£{item.price}</div>
            </div>
        </StyledShopItem>
    );
}

export default ShopItem;