import { createContext } from "react";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const authInfo = {
    name: "jubayer",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
