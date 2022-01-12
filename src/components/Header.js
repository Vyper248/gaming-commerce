import styled from 'styled-components';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import { FaHome, FaShoppingCart } from 'react-icons/fa';

const StyledComp = styled.div`
    background-color: #FFF;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 1.2em;

    & > .headerBtn {
        padding: 10px;
        margin: 20px;
        text-decoration: none;
        color: black;
    }

    & svg {
        font-size: 1.5em;
    }

    & > div.spacer {
        flex-grow: 1;
    }

    & > .headerBtn:hover {
        color: #555;
        cursor: pointer;
    }
`

const Header = ({history, match}) => {
    const onClickBasket = () => {

    }

    const onClickHome = () => {
        history.push('/');
    }

    return (
        <StyledComp>
            <Link className='headerBtn' to='/'><FaHome/></Link>
            <div className='spacer'></div>
            <Link className='headerBtn' to='/Shop'>Shop</Link>
            <Link className='headerBtn' to='/Contact'>Contact</Link>
            <Link className='headerBtn' to='/SignIn'>Sign In</Link>
            <div className='headerBtn' onClick={onClickBasket}><FaShoppingCart/></div>
        </StyledComp>
    );
}

export default withRouter(Header);