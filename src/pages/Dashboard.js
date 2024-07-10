import React from "react";
import { Link } from "react-router-dom";

let Dashboard = () => {
  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ minHeight: "525px" }}
      >
        <h2>Home</h2>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Welcome to the World of React</h1>
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components by Facebook Inc. It
              is maintained by Meta and a community of individual developers and
              companies. React can be used to develop single-page, mobile, or
              server-rendered applications with frameworks like Next.js
            </p>
            <p>
              <Link to={"/"} className="btn btn-primary btn-lg">
                Learn more »
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
