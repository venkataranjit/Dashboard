import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

let Customers = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
       setLoading(false);
  }, []);
 
  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ minHeight: "525px" }}
      >
        <h2>Customers</h2>
        <div className="jumbotron">
          <div className="container">
            {loading ? (
              <SkeletonTheme baseColor="#999" highlightColor="#888">
                <Skeleton count={50} />
              </SkeletonTheme>
            ) : (
              <p>{JSON.stringify(data)}</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Customers;
