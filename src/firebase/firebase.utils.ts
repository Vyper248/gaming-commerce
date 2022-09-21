// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { getFirestore, doc, collection, getDoc, getDocs, query, setDoc, writeBatch, onSnapshot, Unsubscribe } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { Collection, Collections } from "../redux/shopSlice";

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

export const signInWithGoogle = async () => {
	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		if (error instanceof Error) console.log('Error signing in: ', error.message);
		else console.log('Error signing in: ', error);
	}
}

type AdditionalData = {
	displayName?: string;
}

export const createUseProfileDocument = async <T extends AdditionalData>(userAuth: User, additionalData: T) => {
	if (!userAuth) return;

	const userRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = Date.now();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			if (error instanceof Error) console.log('Error creating user: ', error.message);
			else console.log('Error creating user: ', error);
		}
	}

	return userRef;
}

export const addCollectionAndItems = async (collectionKey: string, collectionItems: Collection[]): Promise<void> => {
	try {
		const batch = writeBatch(db);

		const collectionRef = collection(db, collectionKey);
		collectionItems.forEach(collectionObj => {
			let docRef = doc(collectionRef, collectionObj.title.toLowerCase());
			batch.set(docRef, collectionObj);
		});

		await batch.commit();
	} catch (error) {
		if (error instanceof Error) console.log('Error creating collections: ', error.message);
		else console.log('Error creating collections: ', error);
	}
}

//returns categories and items, but no listener to check for data changes
export const getCategoriesAndItems = async (): Promise<Collections> => {
	const querySnapshot = await getDocs(collection(db, 'categories'));

	const categoryData: Collections = {};
	querySnapshot.forEach((doc) => {
		const data = doc.data() as Collection;
		categoryData[data.title] = data;
	});

	return categoryData;
}

type DataHandler = (categories: Collections) => void;

//gets data and also subscribes to listener for changes
export const subscribeToCategoriesAndItems = (dataHandler: DataHandler): Unsubscribe => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		const categoryData: Collections = {};
		querySnapshot.forEach((doc) => {
			let data = doc.data() as Collection;
			categoryData[data.title] = data;
		});
		dataHandler(categoryData);
	});

	return unsubscribe;
}