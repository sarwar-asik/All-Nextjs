## firebase with Next.js >>>


#### src>firebase>firebase.congfig.js>>>
       
            import {getAuth} from 'firebase/auth'
        import { initializeApp } from "firebase/app";
        import { getAnalytics } from "firebase/analytics";

        const firebaseConfig = {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_FIREBASE_APP_ID,
            measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
        
        };

      
        export const app = initializeApp(firebaseConfig);
        
        export const auth  = getAuth(app)

     