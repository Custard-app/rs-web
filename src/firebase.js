import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// console.log("ApiKey", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
// console.log("AuthDomain", process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);
// console.log("ProjectId", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
// console.log("StorageBucket", process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);
// console.log("MessagingSenderId", process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID);
// console.log("AppId", process.env.NEXT_PUBLIC_FIREBASE_APP_ID);

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
