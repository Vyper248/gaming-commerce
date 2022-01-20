// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async (history) => {
	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		const errorCode = error.code;
		console.log(errorCode);
	}
}

export const createUseProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = await doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = Date.now();

		try {
			setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('Error creating user: ', error.message)
		}
	}

	return userRef;
}