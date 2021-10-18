import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import MainBackgroundLayout from "../../common/components/MainBackgroundLayout";

export default function SignIn({ setStep }) {
  const uiConfig = React.useMemo(
    () => ({
      signInFlow: "popup",
      // We will display Email and Google as auth providers.
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => {
          setStep(1);
          // return false to avoid redirects after sign in
          return false;
        },
      },
    }),
    [setStep]
  );

  return (
    <MainBackgroundLayout>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        Continue as guest
      </button>
    </MainBackgroundLayout>
  );
}
