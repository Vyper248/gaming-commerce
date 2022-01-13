import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const StyledComp = styled.div`
    display: inline-block;
    margin: 20px 50px 20px 50px;
    text-align: left;
    width: 30vw;
    max-width: 500px;
    min-width: 300px;
`

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (value) => setEmail(value);
    const onChangePassword =  (value) => setPassword(value);

    const onSignIn = (e) => {
        e.preventDefault();

        setEmail('');
        setPassword('');
        console.log('Sign In');
    }

    return (
        <StyledComp>
            <h3>I already have an account</h3>
            <p>Sign in with your email and password</p>
            <form onSubmit={onSignIn}>
                <Input label='Email' type='email' value={email} onChange={onChangeEmail} required/>
                <Input label='Password' type='password' value={password} onChange={onChangePassword} required/>
                <Button label='Sign In' type='submit'/>
            </form>
        </StyledComp>
    );
}

export default SignInForm;