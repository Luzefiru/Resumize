// Your web app's Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBAKl9Wg7kJUUFuir-UKr8AOQFdvElMjKA',
  authDomain: 'resumize-9630a.firebaseapp.com',
  projectId: 'resumize-9630a',
  storageBucket: 'resumize-9630a.appspot.com',
  messagingSenderId: '698288735788',
  appId: '1:698288735788:web:edf938cb37b8587ac83389',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth service
export const auth = getAuth(app);
// Initialize AuthEmulator for development purposes, run with: firebase emulators:start --only auth
connectAuthEmulator(auth, 'http://localhost:9099');
