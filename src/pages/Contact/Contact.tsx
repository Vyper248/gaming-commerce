import { FormEvent, useState } from 'react';
import StyledContact from './Contact.style';

import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const onChangeName = (value: string) => {
        setName(value);
    }

    const onChangeEmail = (value: string) => {
        setEmail(value);
    }

    const onChangeMessage = (value: string) => {
        setMessage(value);
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        setSuccess(true);

    }

    return (
        <StyledContact>
            <Heading heading='Contact'/>
            <form onSubmit={onSubmit}>
                <Input type='text' value={name} label='Name' onChange={onChangeName} required/>
                <Input type='email' value={email} label='Email' onChange={onChangeEmail} required/>
                <Input type='text' value={message} label='Message' onChange={onChangeMessage} required/>
                <Button label='Submit' type='submit'/>
            </form>
            { success ? <div>Thank you for your message, we aim to reply within 5 working days.</div> : null }
        </StyledContact>
    );
}

export default Contact;