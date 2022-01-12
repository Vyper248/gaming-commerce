import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const StyledComp = styled.div`
    display: inline-block;
    margin: 20px;
    text-align: left;
    width: 50%;
    max-width: 500px;
    min-width: 300px;
`

const RegisterForm = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const onRegister = (e) => {
        e.preventDefault();
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPass('');
    }

    const onChangeDisplayName = (value) => setDisplayName(value);
    const onChangeEmail = (value) => setEmail(value);
    const onChangePassword = (value) => setPassword(value);

    const checkPassword = (value, e) => {
        setConfirmPass(value);
        if (value !== password) e.target.setCustomValidity('Passwords do not match');
        else e.target.setCustomValidity('')
    }

    return (
        <StyledComp>
            <h3>I don't have an account</h3>
            <p>Sign up with your email and password</p>
            <form onSubmit={onRegister}>
                <Input label='Display Name' type='text' value={displayName} onChange={onChangeDisplayName} required/>
                <Input label='Email' type='email' value={email} onChange={onChangeEmail} required/>
                <Input label='Password' type='password' value={password} onChange={onChangePassword} required/>
                <Input label='Confirm Password' type='password' value={confirmPass} onChange={checkPassword} required/>
                <Button label='Sign Up' type='submit'/>
            </form>
        </StyledComp>
    );
}

export default RegisterForm;