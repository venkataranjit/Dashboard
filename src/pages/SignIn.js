import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./SignIn.module.css";
import { db } from "../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, "Users");
      const q = query(
        usersRef,
        where("email", "==", email),
        where("password", "==", password)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("Invalid email or password");
      } else {
        querySnapshot.forEach((doc) => {
          // Save user data to localStorage or state if needed
          localStorage.setItem("user", JSON.stringify(doc.data()));
        });
        setError("");
        navigate("/dashboard/dashboard");
      }
    } catch (error) {
      setError("Failed to authenticate. Please try again.");
    }
  };
  return (
    <section className={`${styles["vh-100"]}`}>
      <a href="https://dummyjson.com/users" target="_blank" rel="noreferrer">
        for user details
      </a>
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
            <form className={`${styles["form-signin"]}`} onSubmit={handleLogin}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                required
                autoFocus
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
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign in
              </button>
              
            </form>
            <Link to="signup" style={{ float: "right", marginTop: "5px" }}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
