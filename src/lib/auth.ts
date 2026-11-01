import { goto } from '$app/navigation';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const logIn = async (email: string, password: string) => {
	await signInWithEmailAndPassword(auth, email, password)
		.then(async () => {
			await goto('/');
		})
		.catch((error) => {
			console.log(error);
		});
};

export const signUp = async (email: string, password: string, username: string) => {
	await createUserWithEmailAndPassword(auth, email, password)
		.then(async (userCredential) => {
			const user = userCredential.user;
			const db = getFirestore();

			await setDoc(doc(db, 'users', user.uid), { username: username });
			await goto('/');
		})
		.catch((error) => {
			console.log(error);
		});
};
