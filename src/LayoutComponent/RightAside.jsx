import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function RightAside() {
  return (
    <div>
        {/* login with provider */}
      <div className="text-center space-y-3 mt-5">
        <button className="btn w-full border-blue-300 text-lg font-semibold flex items-center">
          <FcGoogle></FcGoogle>
          <p>Login with Google</p>
        </button>
        <button className="btn w-full border-gray-600 text-lg font-semibold flex items-center">
          <FaGithub></FaGithub>
          <p>Login with Github</p>
        </button>
      </div>
    </div>
  );
}

export default RightAside;
