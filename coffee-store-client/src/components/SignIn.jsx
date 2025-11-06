import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userInfo } = Object.fromEntries(
      formData.entries()
    );
    const newUser = { ...userInfo, email };
    console.log(newUser);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "User Data has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            form.reset();
          });
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center font-bold">Signin now!</h1>
        <div className="card-body">
          <form className="fieldset" onSubmit={handleCreateUser}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              required
              placeholder="Name"
            />
            <label className="label">Address</label>
            <input
              type="text"
              className="input"
              name="address"
              required
              placeholder="Address"
            />
            <label className="label">Phone</label>
            <input
              type="text"
              className="input"
              name="phone"
              required
              placeholder="Phone"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              name="photo"
              required
              placeholder="Photo URL"
            />
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

export default SignIn;
