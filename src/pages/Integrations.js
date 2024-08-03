import React, { useState } from "react";

let Integrations = () => {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState("");
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const [todo, setTodo] = useState([
    { todoList: "This is First Todo", id: 1 },
    { todoList: "This is Second Todo", id: 2 },
  ]);
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      errorHandler("Add Todo to Submit", "danger");
    } else {
      if (edit !== null) {
        setTodo((prevTodo) =>
          prevTodo.map((item) =>
            item.id === edit ? { ...item, todoList: input } : item
          )
        );
        setEdit(null);
        errorHandler("Todo Updated Successfully", "success");
      } else {
        
          setTodo((prevTodo) => [
            { todoList: input, id: Date.now() },
            ...prevTodo,
          ]);
          errorHandler("Todo Added Successfully", "success");
        
      }
      setInput("");
    }
  };

  const deleteHandler = (id) => {
    setTodo((prevtodo) => prevtodo.filter((item) => item.id !== id));
    errorHandler("Todo Deleted Successfully", "success");
  };

  const editHandler = (id) => {
    // const itemToEdit = todo.find((item) => item.id === id);
    // setInput(itemToEdit.todoList);
    setInput(todo.find((item) => item.id === id).todoList);
    setEdit(id);
  };

  const errorHandler = (msg, type) => {
    setError({ message: msg, type: type });
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);

    const filteredTodo = todo.filter((item) =>
      item.todoList.toLowerCase().includes(e.target.value.toLowerCase())
    );

    if (filteredTodo.length === 0) {
      errorHandler("No Todo Matched", "danger");
    } else {
      setError(null);
    }
  };

  const filteredTodo = todo.filter((item) =>
    item.todoList.toLowerCase().includes(search.toLowerCase())
  );

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
            <input
              className="form-control mb-3 col-sm-2 float-right"
              name="search"
              value={search}
              placeholder="search"
              onChange={searchHandler}
            />
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="input"
                value={input}
                onChange={inputHandler}
              />
              <button
                className="btn btn-secondary"
                type="button"
                onClick={submitHandler}
              >
                {edit !== null ? "Update" : "Submit"}
              </button>
            </div>
            {error && (
              <div className={`alert alert-${error.type} mt-3`} role="alert">
                {error.message}
              </div>
            )}

            <ul className="list-group">
              {filteredTodo.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.todoList}
                  <span>
                    <span
                      className="badge bg-primary rounded-pill text-white"
                      onClick={() => editHandler(item.id)}
                    >
                      Edit
                    </span>
                    <span
                      style={{ marginLeft: "5px" }}
                      className="badge bg-primary rounded-pill text-white"
                      onClick={() => deleteHandler(item.id)}
                    >
                      X
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Integrations;
