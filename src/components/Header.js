import styled from 'styled-components';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

import { FaHome } from 'react-icons/fa';

import CartIcon from './CartIcon';

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

const Header = ({currentUser}) => {
    const auth = getAuth();

    const onSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    const onClickBasket = () => {

    }


    return (
        <StyledComp>
            <Link className='headerBtn' to='/'><FaHome/></Link>
            <div className='spacer'></div>
            <Link className='headerBtn' to='/Shop'>Shop</Link>
            <Link className='headerBtn' to='/Contact'>Contact</Link>
            { currentUser === null 
                ? <Link className='headerBtn' to='/SignIn'>Sign In</Link> 
                : <Link className='headerBtn'to='/' onClick={onSignOut}>Sign Out</Link>
            }
            <div className='headerBtn' onClick={onClickBasket}><CartIcon/></div>
        </StyledComp>
    );
}

export default withRouter(Header);