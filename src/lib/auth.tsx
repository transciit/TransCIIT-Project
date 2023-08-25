/* eslint-disable @typescript-eslint/no-shadow */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

import { auth } from "@/config/firebase";

const AuthContext = createContext<any>({});

export const useFirebaseAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userChange) => {
      if (userChange) {
        setUser({
          uid: userChange.uid,
          email: userChange.email,
          displayName: userChange.displayName,
          profile: userChange.photoURL,
          getIdToken: userChange.getIdToken(),
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (token: string) => {
    return signInWithCustomToken(auth, token);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
