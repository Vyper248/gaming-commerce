import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import { signInWithGoogle, db } from '../firebase/firebase.utils';
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

    //example of how to get documents and collections from database
    const test = async () => {
        //get a single document with id
        const singleDoc = await getDoc(doc(db, 'users', 'f7cCad3AF7lr5gJIAZfw'));
        console.log(singleDoc.data());

        //get multiple documents
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach(async (document) => {
          console.log(document.data());

          //get further collection data with a docRef
          const docRef = doc(db, "users", document.id);
          const querySnapshot2 = await getDocs(collection(docRef, "cartItems"));
          querySnapshot2.forEach(document2 => {
              console.log(document2.data());
          });

          //or by using path
          const querySnapshot3 = await getDocs(collection(db, `users/${document.id}/cartItems`));
          querySnapshot3.forEach(document3 => {
              console.log(document3.data());
          })
        });
    }

    const onChangeEmail = (value) => setEmail(value);
    const onChangePassword =  (value) => setPassword(value);

    const onSignIn = async (e) => {
        e.preventDefault();

        try {
            let auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);

            setEmail('');
            setPassword('');
        } catch (error) {            
            if (error.message.includes('wrong-password')) alert('Incorrect Email or Password');
            else if (error.message.includes('user-not-found')) alert('Incorrect Email or Password');
            else console.log(error.message);
        }

    }

    const onSignInWithGoogle = () => {
        signInWithGoogle();
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