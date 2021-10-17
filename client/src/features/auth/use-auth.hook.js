import React from "react";
import { useUser } from "./UserProvider";
import firebase from "firebase/app";
import "firebase/auth";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use old app
}

export function useAuth() {
  const { setUser } = useUser();

  React.useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        const token = await user.getIdToken(true);

        if (process.env.NODE_ENV === "development") {
          console.log(token);
        }

        setUser({
          id: user.uid,
          email: user.email,
          token,
        });
      });
    return () => unregisterAuthObserver();
  }, []);
}
