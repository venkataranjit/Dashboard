import React, { useState } from "react";
import './UseState.css';

let UseState = () => {
  // Basic Counter Example
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  // Basic Counte Example

  // Toggling a Boolean
  const [isOn, setIsOn] = useState(false);
  // Toggling a Boolean

  //Managing an input field
  const [inputValue, setInputValue] = useState("Hello");
  //Managing an input field

  //Managing Multi Input Fields
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  //Managing Multi Input Fields

  //Managing an Array----- start
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };
  //Managing an Array----- End

  //Managing an Object

  const [user, setUser] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  //Managing an Object

  //Check Box Selection
  const [checkedState, setCheckedState] = useState({
    box1: false,
    box2: false,
    box3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  //Check Box Selection

  //Radio Box Selection

  const [selectedBox, setSelectedBox] = useState("");

  const handleRadioChange = (event) => {
    setSelectedBox(event.target.value);
  };
  //Radio Box Selection

  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ minHeight: "525px" }}
      >
        <h2>UseStates</h2>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h6>Basic Counter Example</h6>
                <button onClick={increment}>+</button> &nbsp;
                <button onClick={decrement}>-</button>
                <h6>Count: {count}</h6>
                <hr />
              </div>

              <div className="col-sm-6">
                <h6>Toggling a Boolean</h6>
                <p>The light is {isOn ? "On" : "Off"}</p>
                <button onClick={() => setIsOn(!isOn)}>Toggle</button>
                <hr />
              </div>

              <div className="col-sm-6">
                <h6>Managing an Input Feild</h6>
                <p>
                  Value in Input Field is <b>{inputValue}</b>
                </p>
                <input
                  type="text"
                  value={inputValue}
                  placeholder="Enter Text"
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
                <hr />
              </div>

              <div className="col-sm-6">
                <h6>Managing Multi Input Feilds</h6>
                <p>
                  Combined Inputs are <b>{inputValue1 + inputValue2}</b>
                </p>
                <input
                  type="text"
                  value={inputValue1}
                  onChange={(e) => {
                    setInputValue1(e.target.value);
                  }}
                />
                <input
                  type="text"
                  value={inputValue2}
                  onChange={(e) => {
                    setInputValue2(e.target.value);
                  }}
                />
                <hr />
              </div>

              <div className="col-sm-6">
                <h6>Managing an Array</h6>
                <button onClick={addItem}>Add Item</button>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <hr />
              </div>

              <div className="col-sm-6">
                <h6>Managing an Object</h6>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={user.name}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={user.age}
                  onChange={handleChange}
                />
                <p>
                  Name: <b>{user.name}</b>
                </p>
                <p>
                  Age: <b>{user.age}</b>
                </p>
                <hr />
              </div>

              <div className="col-sm-6">
                <h6>Check Box Selection</h6>
                <label>
                  <input
                    type="checkbox"
                    name="box1"
                    checked={checkedState.box1}
                    onChange={handleCheckboxChange}
                  />
                  Box 1
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="box2"
                    checked={checkedState.box2}
                    onChange={handleCheckboxChange}
                  />
                  Box 2
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="box3"
                    checked={checkedState.box3}
                    onChange={handleCheckboxChange}
                  />
                  Box 3
                </label>
                <div>
                  {checkedState.box1 && <div>Box1</div>}
                  {checkedState.box2 && <div>Box2</div>}
                  {checkedState.box3 && <div>Box3</div>}
                </div>
                <hr />
              </div>

              <div className="col-sm-6">
                <h6>Radio Box Selection</h6>
                <label>
                  <input
                    type="radio"
                    name="box"
                    value="box1"
                    checked={selectedBox === "box1"}
                    onChange={handleRadioChange}
                  />
                  Box 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="box"
                    value="box2"
                    checked={selectedBox === "box2"}
                    onChange={handleRadioChange}
                  />
                  Box 2
                </label>
                <label>
                  <input
                    type="radio"
                    name="box"
                    value="box3"
                    checked={selectedBox === "box3"}
                    onChange={handleRadioChange}
                  />
                  Box 3
                </label>
                <div>
                  {selectedBox === "box1" && <div>Box1</div>}
                  {selectedBox === "box2" && <div>Box2</div>}
                  {selectedBox === "box3" && <div>Box3</div>}
                </div>
                <hr />
              </div>

              <div className="col-sm-6">
                <h6>Testing</h6>
              
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UseState;
