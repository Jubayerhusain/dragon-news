import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Function to create new users
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // Function to log in users
  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // Function to log out users
  const userSignOut = async () => {
    setLoading(true);
    try {
      return await signOut(auth);
    } finally {
      setLoading(false);
    }
  };

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false); // Ensure loading is reset
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);
  // user profile update
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }
  const authInfo = {
    createUser,
    loginUser,
    userSignOut,
    updateUserProfile,
    loading,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
