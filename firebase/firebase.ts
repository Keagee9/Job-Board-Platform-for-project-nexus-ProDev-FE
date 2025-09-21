
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
// Go to your Firebase project settings and find your web app's configuration.
const firebaseConfig = {
  // Found in Project settings > General > Your apps > Web app > SDK setup and configuration
  apiKey: "YOUR_API_KEY", 

  // Found in Project settings > General > Your apps > Web app > SDK setup and configuration
  // Or in Authentication > Settings > Authorized domains
  authDomain: "YOUR_AUTH_DOMAIN", 

  // Found in Project settings > General > Project ID
  projectId: "YOUR_PROJECT_ID",

  // Found in Storage > Get started > You will see gs://<your-storage-bucket>
  storageBucket: "YOUR_STORAGE_BUCKET", 

  // Found in Project settings > Cloud Messaging > Project credentials
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", 

  // Found in Project settings > General > Your apps > Web app > SDK setup and configuration
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
