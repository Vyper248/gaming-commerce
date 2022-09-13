import { memo } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { FaHome } from 'react-icons/fa';

import HeaderStyle from './Header.style';
import CartIcon from '../CartIcon/CartIcon';

import { toggleCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';

const Header = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user.currentUser);

    const onSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    const onClickCart = () => {
        dispatch(toggleCart());
    }

    return (
        <HeaderStyle>
            <Link className='headerBtn' to='/'><FaHome/></Link>
            <div className='spacer'></div>
            <Link className='headerBtn' to='/Shop'>Shop</Link>
            <Link className='headerBtn' to='/Contact'>Contact</Link>
            { currentUser === null 
                ? <Link className='headerBtn' to='/SignIn'>Sign In</Link> 
                : <Link className='headerBtn'to='/' onClick={onSignOut}>Sign Out</Link>
            }
            <div className='headerBtn' onClick={onClickCart}><CartIcon/></div>
        </HeaderStyle>
    );
}

export default memo(Header);