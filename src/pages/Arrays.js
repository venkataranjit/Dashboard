import React from "react";

let Arrays = () => {
  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ minHeight: "525px" }}
      >
        <h2>Arrays</h2>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <ArrayMapFunction />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Arrays;

let ArrayMapFunction = () => {
  let ar1 = [1, 2, 3, 4, 5, {name:"victory", age:35, address:"hyd"}, {name:"victory", age:35}];
  return (
    <>
      <h2>Array Map Function</h2>
      <ul>
      {ar1.map((item, index) => {
                if (typeof item === 'object' && item !== null) {
                    // Check if item is a plain object (excluding arrays and null)
                    return (
                        <li key={index}>
                            <ul>
                            {Object.keys(item).map((key) => (
                                <li key={key}>
                                    {key}: {item[key]}
                                </li>
                            ))}
                            </ul>
                        </li>
                    );
                } else {
                    // Render for numbers or other types
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    );
                }
            })}
      </ul>
    </>
  );
};
