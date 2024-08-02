import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./SignIn.module.css";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Add a new user document to the Firestore collection
      const usersRef = collection(db, "Users");
      await addDoc(usersRef, { email, password });
      setSuccess("Account created successfully! Please sign in.");
      setError("");
      setTimeout(() => {
        navigate("/signin"); // Redirect to the sign-in page after successful signup
      }, 10000);
    } catch (error) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <section className={`${styles["vh-100"]}`}>
      <div className={`${styles["container-fluid"]} ${styles["h-custom"]}`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form
              className={`${styles["form-signup"]}`}
              onSubmit={handleSignUp}
            >
              <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                required
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                placeholder="Enter password"
                required
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <Link to="/signin" style={{float:"right", marginTop: "5px"}}>Sign In</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
