import React, { useState } from "react";

let Integrations = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const [todo, setTodo] = useState([
    { id: 1, value: "Dummy" },
    { id: 2, value: "Dummy 2" },
  ]);

  const errorFunction = (msg, type) => {
    setError({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      errorFunction("Please Add Any Task", "danger");
    } else {
      setTodo((prevTodo) => [{ id: Date.now(), value: input }, ...prevTodo]);
      setInput("");
      errorFunction("Task Added Successfully", "success");
    }
  };
  const deleteHandler = (id) => {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
    errorFunction("Deleted Successfully", "success");
  };
  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ minHeight: "525px" }}
      >
        <h2>Todo List</h2>
        <div className="jumbotron">
          <div className="container">
            <div className="input-group mb-3">
              <input
                type="text"
                value={input}
                name="input"
                onChange={inputHandler}
                className="form-control"
              />
              <button
                className="btn btn-secondary"
                type="button"
                onClick={clickHandler}
              >
                Submit
              </button>
            </div>
            {error && (
              <div className={`alert alert-${error.type} mt-3`} role="alert">
                {error.msg}
              </div>
            )}
            <ul className="list-group">
              {todo.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.value}
                    <span
                      onClick={() => deleteHandler(item.id)}
                      className="badge bg-primary rounded-pill text-white"
                    >
                      X
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Integrations;
