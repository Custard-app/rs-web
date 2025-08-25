import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq6V1YEzwef4DdZqlQFIyllHB-ml9EBXs",
  authDomain: "rupeestop-website.firebaseapp.com",
  projectId: "rupeestop-website",
  storageBucket: "rupeestop-website.firebasestorage.app",
  messagingSenderId: "179700562519",
  appId: "1:179700562519:web:6eb6a53f9a4dbec8648112"
};

// Initialize Firebase only if it hasn't been initialized already
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Auth
const auth = getAuth(app);
auth.useDeviceLanguage();

// Initialize Firestore with better settings
let db;
try {
  db = initializeFirestore(app, {
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  });
} catch (error) {
  // If already initialized, get the existing instance
  db = getFirestore(app);
}

export { auth, db };
