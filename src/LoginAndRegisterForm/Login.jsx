import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Components/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
function Login() {
  const {loginUser} = useContext(AuthContext)
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const hundleLogin = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
    .then(res =>{
      const user = res.user;
      navigate(location?.state?location.state:"/")
    })
    .catch(error=>{
      const errorMessage = error.message;
      setError('Invalid Email and password')
    })
  }
  return (
    <div className="w-11/12 mx-auto">
      <Navber></Navber>
      <div>
        <div className="hero-content mt-32 flex-col mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={hundleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              {
                error&&<label className="label">
                <a href="#" className=" text-red-500  font-semibold">
                  {error}
                </a>
              </label>
              }
            </form>
            <p className="text-center mb-5">
              If you have no account please{" "}
              <Link to={`/register`}>
                <p className="text-red-500  font-semibold">Register</p>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
