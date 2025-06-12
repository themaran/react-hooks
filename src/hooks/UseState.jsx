import React, { useState } from "react";

const UseState = () => {
  const [data, setData] = useState({
    name: "name",
    phone: "phone",
    city: "city",
    country: "country",
  });
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const [isToggle, setToggle] = useState(false);
  const toggleStyle = {
    width: "300px",
    backgroundColor: "yellow",
    boxShadow:
      "0px 0px 5px yellow, 0px 0px 10px yellow, 0px 0px 20px yellow, 0px 0px 30px yellow, 0px 0px 40px yellow",
    color: "yellow",
    borderRadius: "30px",
  };
  const handleToggle = () => {
    setToggle(!isToggle);
  };
  // THEME
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };
  const themeStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    color: "white",
  };
  // popup
  const [popup, showPopup] = useState(false);
  const handlePopup = () => {
    showPopup(!popup);
  };
  const popupStyle = {
    width: "500px",
    height: "200px",
    backgroundColor: "white",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 0px 5px black",
  };

  // todo
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTodo([...todo, input]);
    console.log(todo);
    setInput("");
  };
  const deleteTodo = (index) =>{
    const tasks = todo.filter((_,i)=> i !== index);
    setTodo(tasks); 
  }
  return (
    <div style={theme ? themeStyle : {}}>
      <div>
        <fieldset>
          <legend>Theme</legend>
          <button onClick={handleTheme}>{theme ? "Light" : "Dark"}</button>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>useState Form</legend>
          <form>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} />
            <br />
            <label>Phone:</label>
            <input type="text" name="phone" onChange={handleChange} />
            <br />
            <label>City:</label>
            <input type="text" name="city" onChange={handleChange} />
            <br />
            <label>Country:</label>
            <input type="text" name="country" onChange={handleChange} />
            <br />
          </form>
        </fieldset>
        <fieldset>
          <legend>Data</legend>
          <ul>
            <li>{data.name}</li>
            <li>{data.phone}</li>
            <li>{data.city}</li>
            <li>{data.country}</li>
          </ul>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>Counter</legend>
          <button onClick={handleCount}>Count</button>
          {count}
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>Toggle Light</legend>
          <div>{isToggle && <div style={toggleStyle}>0</div>}</div>
          <button onClick={handleToggle}>{isToggle ? "OFF" : "ON"}</button>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>Popup window</legend>
          {popup && <div style={popupStyle}>Hey this is popup!</div>}
          <div>
            <button onClick={handlePopup}>{popup ? "Hide" : "Show"}</button>
          </div>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>To-Do App</legend>
          <div>
            <div>
              <label>Enter the todo</label>
              <br></br>
              <input
                type="text"
                name="todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
              <button onClick={addTask}>Add Todo</button>
            </div>
            <div>
              <ul>
                {todo.map((items, index) => (
                  <li key={index}>{items} <button onClick={()=>deleteTodo(index)}>X</button></li>
                ))}
              </ul>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default UseState;
