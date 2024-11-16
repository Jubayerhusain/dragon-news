import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center mt-9">
        <span className="loading loading-spinner text-error text-3xl"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
}

export default PrivateRoute;
