import styled from 'styled-components';
import { withRouter } from "react-router";

const StyledComp = styled.div`
    background-color: #EEE;
    width: 100%;
    margin-bottom: 10px;

    & > div.headerBtn {
        display: inline-block;
        padding: 8px 10px;
        border-right: 1px solid #DDD;
    }

    & > div.headerBtn:hover {
        background-color: #DDD;
        cursor: pointer;
    }
`

const Header = ({history, match}) => {
    const onClickShop = () => {
        history.push('/Shop');
    }

    const onClickHome = () => {
        history.push('/');
    }

    return (
        <StyledComp>
            <div className='headerBtn' onClick={onClickHome}>Home</div>
            <div className='headerBtn' onClick={onClickShop}>Shop</div>
        </StyledComp>
    );
}

export default withRouter(Header);