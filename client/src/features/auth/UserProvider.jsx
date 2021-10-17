import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

const UserContext = React.createContext({
  user: undefined,
  setUser: () => {},
  signOut: () => {},
});

export default function UserProvider({ children }) {
  const [user, setUser] = React.useState();

  const signOut = async () => {
    await firebase.auth().signOut();
    setUser(undefined);
  };

  return (
    <UserContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return React.useContext(UserContext);
}
