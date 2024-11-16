import React, { useContext } from "react";
import Navber from "../Components/Navber";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Register() {
  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo_Url.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
    .then((res)=>{
      const user = res.user;
      console.log(user);
      navigate('/')
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  return (
    <div className="w-11/12 mx-auto">
      <Navber></Navber>
      <div className="hero-content mt-32 flex-col mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Registration now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo_Url"
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
          </form>
          <p className="text-center mb-5">
            If you have an account please{" "}
            <Link to={`/login`}>
              <p className="text-blue-500  font-semibold">Login</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
