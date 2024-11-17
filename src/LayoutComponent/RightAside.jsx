import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

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
      {/* find us on section */}
      <div className="mt-3 space-y-3">
      <h2 className="font-semibold text-xl mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start text-lg font-semibold text-gray-600">
          <FaFacebook></FaFacebook> <Link to={`https://www.facebook.com/jubayer.husain.627354`}>Facebook</Link>
        </button>
        <button className="btn join-item justify-start text-lg font-semibold text-gray-600">
          <FaInstagram></FaInstagram> Instagram
        </button>
        <button className="btn join-item justify-start text-lg font-semibold text-gray-600">
          <FaTwitter></FaTwitter> Twitter
        </button>
      </div>
      </div>
    </div>
  );
}

export default RightAside;
