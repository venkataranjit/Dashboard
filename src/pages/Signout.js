import React from "react";
import { Link } from "react-router-dom";

let Signout = () => {
  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ minHeight: "525px" }}
      >
        <h2>Sign Out</h2>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">You are Signed Out</h1>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <p>
              <Link to={'/'}
                className="btn btn-primary btn-lg"
              >
                Login Agian
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signout;
