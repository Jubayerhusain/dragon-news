import profilepic from "./../assets/user.png";
import { Link, NavLink } from "react-router-dom";
function Navber() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900">Dynamic User Name</div>
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
        <img src={profilepic} alt="" />
        <Link className="btn text-white bg-slate-700 text-xl font-bold">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navber;
