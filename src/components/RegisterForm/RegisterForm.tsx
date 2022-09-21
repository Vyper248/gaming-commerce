import { ChangeEvent, SyntheticEvent, useState } from 'react';

import { registerWithEmailAndPassword } from '../../firebase/firebase.utils';

import StyledRegisterForm from './RegisterForm.style';
import Button from '../Button/Button';
import Input from '../Input/Input';

const RegisterForm = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const onRegister = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            await registerWithEmailAndPassword(email, password, displayName);
        } catch (error) {
            if (error instanceof Error) {
                console.log('Error creating user: ', error.message);
                if (error.message.includes('email-already-in-use')) alert('Email is already registered.');
                if (error.message.includes('weak-password')) alert('Password should be at least 6 characters.');
            } else {
                console.log('Error creating user: ', error);
            }
        }
    }

    const onChangeDisplayName = (value: string) => setDisplayName(value);
    const onChangeEmail = (value: string) => setEmail(value);
    const onChangePassword = (value: string) => setPassword(value);

    const checkPassword = (value: string, e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPass(value);
        if (value !== password) e.target.setCustomValidity('Passwords do not match');
        else e.target.setCustomValidity('')
    }

    return (
        <StyledRegisterForm>
            <h3>I don't have an account</h3>
            <p>Sign up with your email and password</p>
            <form onSubmit={onRegister}>
                <Input label='Display Name' type='text' value={displayName} onChange={onChangeDisplayName} required/>
                <Input label='Email' type='email' value={email} onChange={onChangeEmail} required/>
                <Input label='Password' type='password' value={password} onChange={onChangePassword} required/>
                <Input label='Confirm Password' type='password' value={confirmPass} onChange={checkPassword} required/>
                <Button label='Sign Up' type='submit'/>
            </form>
        </StyledRegisterForm>
    );
}

export default RegisterForm;