import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to create new users
  const createUser = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  // Function to log in users
  const loginUser = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error;
    }
  };

  // Track user authentication state
  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   setUser(currentUser);
    // });

    // return () => {
    //   unsubscribe(); // Cleanup subscription on component unmount
    // };
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("This is a current use", currentUser);
        setUser(currentUser);
      } else {
        console.log("not fount current user");
        setUser(null);
      }
    });
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
