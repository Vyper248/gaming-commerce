import { useHistory } from 'react-router';

import StyledPreviewItems from './PreviewItems.style';
import ShopItem from '../ShopItem/ShopItem';
import Grid from '../Grid/Grid';

import { Item } from '../../redux/shopSlice';

type PreviewItemsProps = {
    title: string;
    items: Item[];
}

const PreviewItems = ({title, items}: PreviewItemsProps) => {
    const history = useHistory();
    //get first 4 items to display
    let selectedItems = [];
    for (let i = 0; i < 4; i++) {
        if (items[i]) selectedItems.push(items[i]);
    }

    const onClickTitle = () => {
        history.push(`/Shop/${title}`);
    }

    return (
        <StyledPreviewItems>
            <h1 onClick={onClickTitle}>{title}</h1>
            <Grid>
            {
                selectedItems.map(item => <ShopItem key={item.id} item={item} category={title}/>)
            }
            </Grid>
        </StyledPreviewItems>
    );
}

export default PreviewItems;