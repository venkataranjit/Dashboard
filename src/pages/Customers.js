import React, {useState, useEffect} from "react";

let Customers = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);
 let d = JSON.stringify(data);
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
            {d}
          </div>
        </div>
      </main>
    </>
  );
};

export default Customers;
