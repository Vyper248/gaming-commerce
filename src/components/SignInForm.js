import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import { signInWithGoogle, db } from '../firebase/firebase.utils';
import { useHistory } from 'react-router-dom';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const StyledComp = styled.div`
    display: inline-block;
    margin: 20px;
    text-align: left;
    width: 400px;
    min-width: 300px;

    & .buttons {
        display: flex;
        justify-content: space-between;
    }
`

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const onChangeEmail = (value) => setEmail(value);
    const onChangePassword =  (value) => setPassword(value);

    const onSignIn = async (e) => {
        e.preventDefault();

        try {
            let auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);

            setEmail('');
            setPassword('');
            history.push('/');
        } catch (error) {            
            
            if (error.message.includes('wrong-password')) alert('Incorrect Email or Password');
            else if (error.message.includes('user-not-found')) alert('Incorrect Email or Password');
            else console.log(error.message);
        }

    }

    const onSignInWithGoogle = () => {
        signInWithGoogle(history);
    }

    return (
        <StyledComp>
            <h3>I already have an account</h3>
            <p>Sign in with your email and password</p>
            <form onSubmit={onSignIn}>
                <Input label='Email' type='email' value={email} onChange={onChangeEmail} required/>
                <Input label='Password' type='password' value={password} onChange={onChangePassword} required/>
                <div className='buttons'>
                    <Button label='Sign In' type='submit'/>
                    <Button label='Sign In With Google' type='button' onClick={onSignInWithGoogle} backgroundColor='#4285F4'/>
                    {/* <Button label='Test' onClick={test} backgroundColor='#4285F4'/> */}
                </div>
            </form>
        </StyledComp>
    );
}

export default SignInForm;