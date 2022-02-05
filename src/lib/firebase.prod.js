import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import Firebase from 'firebase/compat/app';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCfNWXUr1Z9Zr5k7ysYbQ4YpEDtVUd9xNw",
    authDomain: "netflix-clone-18c4a.firebaseapp.com",
    projectId: "netflix-clone-18c4a",
    storageBucket: "netflix-clone-18c4a.appspot.com",
    messagingSenderId: "47556986932",
    appId: "1:47556986932:web:44c28e5e37bcfdf7d82261" 
};

const firebase = Firebase.initializeApp(config);

export { firebase };