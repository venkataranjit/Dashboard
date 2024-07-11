import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

// const users = [
//   {
//     id: 1,
//     name: "Ranjit",
//     username: "ranjit",
//     email: "victoryranjit@gmail.com",
//     phone: "9966189948",
//   },
//   {
//     id: 2,
//     name: "Nagu",
//     username: "nagababu",
//     email: "nag@gmail.com",
//     phone: "123",
//   },
// ];

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     const user = users.find(
  //       (user) => user.email === email && user.phone === phone
  //     );
  //     if (user) {
  //       setError("");
  //       navigate("dashboard/dashboard");
  //     } else {
  //       setError("Invalid email or phone number");
  //     }
  //   };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch users from the API
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();

      // Find user by email and password
      const user = userData.users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setError("");
        navigate("/dashboard/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Failed to authenticate. Please try again.");
    }
  };

  return (
    <>
      <section className={`${styles["vh-100"]}`}>
        <div className={`${styles["container-fluid"]} ${styles["h-custom"]}`}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className={`${styles["form-signin"]}`}>
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
                  password
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
                  onClick={handleLogin}
                  className="btn btn-lg btn-primary btn-block"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
