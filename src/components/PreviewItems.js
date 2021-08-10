import styled from 'styled-components';
import { withRouter } from 'react-router';

import ShopItem from './ShopItem';
import Grid from './Grid';

const StyledComp = styled.div`
    & > h1 {
        font-variant: small-caps;
        width: max-content;

        &:hover {
            cursor: pointer;
            color: #555;
        }
    }
`

const PreviewItems = ({title, items, history, match}) => {

    const onClickTitle = () => {
        history.push(`/Shop/${title}`);
    }

    return (
        <StyledComp>
            <h1 onClick={onClickTitle}>{title}</h1>
            <Grid>
            {
                items.filter((obj,i) => i < 4).map(item => <ShopItem key={item.id} item={item} category={title}/>)
            }
            </Grid>
        </StyledComp>
    );
}

export default withRouter(PreviewItems);