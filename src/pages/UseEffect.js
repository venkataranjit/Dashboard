import React, { useState, useEffect } from "react";

let UseEffect = () => {
  // Example 1
  const [input, setInput] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    setState(
        input.toLowerCase() === "andhra pradesh"
          ? "You are in the State"
          : "You are Out of the State"
      );
  }, [input]);
  // Example 1
  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ minHeight: "525px" }}
      >
        <h2>UseEffects</h2>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h6>Example 1</h6>
                <input type="text" placeholder="Enter Your State" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <p>
                  <b>{state}</b><br />
                  Enter Andhra Pradesh will Show You are in the State or Not
                </p>
                
                <hr />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UseEffect;
