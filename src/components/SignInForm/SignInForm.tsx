import { SyntheticEvent, useState } from 'react';

import { signInWithGoogle, signInUserWithEmailAndPassword } from '../../firebase/firebase.utils';

import StyledSignInForm from './SignInForm.style';

import Input from '../Input/Input';
import Button from '../Button/Button';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (value: string) => setEmail(value);
    const onChangePassword =  (value: string) => setPassword(value);

    const onSignIn = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            await signInUserWithEmailAndPassword(email, password);

            setEmail('');
            setPassword('');
        } catch (error) {            
            if (error instanceof Error) {
                if (error.message.includes('wrong-password')) alert('Incorrect Email or Password');
                else if (error.message.includes('user-not-found')) alert('Incorrect Email or Password');
                else console.log(error.message);
            } else {
                console.log('Error: ', error);
            }
        }

    }

    const onSignInWithGoogle = () => {
        signInWithGoogle();
    }

    return (
        <StyledSignInForm>
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
        </StyledSignInForm>
    );
}

export default SignInForm;