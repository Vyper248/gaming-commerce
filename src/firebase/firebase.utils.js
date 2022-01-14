// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHL3u4FN8E4yAAEBDUTpzGxHctzFSmayg",
    authDomain: "game-commerce-20094.firebaseapp.com",
    projectId: "game-commerce-20094",
    storageBucket: "game-commerce-20094.appspot.com",
    messagingSenderId: "930793178005",
    appId: "1:930793178005:web:e4b64df53fe4190c622c9c",
    measurementId: "G-46YH1FZ3T6"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = (history) => {
  return signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          // const user = result.user;
          // ...
          history.push('/');
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          // const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          console.log(errorCode);
        });
}

export default firebaseApp;