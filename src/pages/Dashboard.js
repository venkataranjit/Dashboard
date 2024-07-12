import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

let Dashboard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
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
            {loading ? (
              <SkeletonTheme baseColor="#999" highlightColor="#888">
                <h1 className="display-3">
                  <Skeleton width="85%" />
                </h1>
                <p>
                  <Skeleton width="95%" count={2} />
                </p>
                <p>
                  <Link>
                    <Skeleton width="150px" height="40px" />
                  </Link>
                </p>
              </SkeletonTheme>
            ) : (
              <>
                <h1 className="display-3">Welcome to the World of React</h1>
                <p>
                  React is a free and open-source front-end JavaScript library
                  for building user interfaces based on components by Facebook
                  Inc. It is maintained by Meta and a community of individual
                  developers and companies. React can be used to develop
                  single-page, mobile, or server-rendered applications with
                  frameworks like Next.js
                </p>
                <p>
                  <Link
                    to={"/dashboard/UseState"}
                    className="btn btn-primary btn-lg"
                  >
                    UseState
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
