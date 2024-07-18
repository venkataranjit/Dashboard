import React from "react";
import { useNavigate, Link } from "react-router-dom";

let Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    console.log("logout");
    // Clear local storage
    localStorage.removeItem("user");
    // Redirect to sign-in page
    navigate("/signin");
    console.log("logout");
  };
  return (
    <>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <Link to={"Dashboard"} className="navbar-brand col-sm-3 col-md-2 mr-0">
          Company name
        </Link>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
          autoComplete="off"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a href="/" className="nav-link" onClick={handleSignOut}>
              Sign out
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;