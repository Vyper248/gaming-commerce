import { MouseEvent, SyntheticEvent } from 'react';
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
    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = () => {
        history.push(`/Shop/${category}/${item.id}`)
    }

const onClickCart = (e: MouseEvent) => {
        e.stopPropagation();
        dispatch(addItem({
            item: item,
            qty: 1,
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
                <div className='itemName' onClick={onClick}>{item.name}</div>
                <div className='itemPrice'>£{item.price}</div>
            </div>
        </StyledShopItem>
    );
}

export default ShopItem;