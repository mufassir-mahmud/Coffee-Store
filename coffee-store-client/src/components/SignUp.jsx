import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const SignUp = () => {
    const {signInUser} =  useContext(AuthContext)
    const handleSignIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then(result =>{
            console.log(result);
            Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Login Succesfully",
                            showConfirmButton: false,
                            timer: 1500,
                          });
        })
        .catch(error =>
            console.log(error.message)
        )
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center font-bold">SignUp Now!</h1>
        <div className="card-body">
          <form className="fieldset" onSubmit={handleSignIn}>
            
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              required
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
        </div>
    );
};

export default SignUp;