import { useContext } from "react";
import profilepic from "./../assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
function Navber() {
  const { userSignOut, user } = useContext(AuthContext);
  const hundleSignOut = () => {
    userSignOut()
      .then((res) => {})
      .catch((error) => {});
  };
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900">
        {user && user.displayName}
      </div>
      <div className="space-x-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold text-blue-500"
              : "text-xl text-gray-700"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold text-blue-500"
              : "text-xl text-gray-700"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold text-blue-500"
              : "text-xl text-gray-700"
          }
        >
          Career
        </NavLink>
      </div>
      <div className="flex space-x-2 items-center">
        {user && user?.email ? (
          <img className="w-[50px] h-[50px] rounded-full" src={user.photoURL} alt="" />
        ) : (
          <img src={profilepic} alt="" />
        )}
        {user ? (
          <Link
            onClick={hundleSignOut}
            className="btn text-white bg-slate-700 text-xl font-bold"
          >
            Logout
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="btn text-white bg-slate-700 text-xl font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navber;
