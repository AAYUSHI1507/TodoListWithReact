import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
//import './App.css'

function App() {
  // States
  const [todo, setTodo] = useState(""); // This is the input text user is providing.
  const [todos, setTodos] = useState([]); // This is to hold the array of todo.
  //Functions
  const HandleEdit = () => {};
  const HandleDelete = () => {};
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-red-100 rounded-xl my-4 p-3 min-h-[80vh]">
        <div className="addTodo my-4">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            type="text"
            onChange={handleChange}
            value={todo}
            className="w-1/2 h-8 rounded-md"
          />
          <button
            className="bg-red-500 hover:bg-red-700 font-bold mx-2 my-1 text-red-200 px-2 py-1 rounded-lg"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Yours Todos</h2>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div key={todo} className="todo flex w-1/2 my-3 justify-between">
                <input
                  type="checkbox"
                  onChange={handleCheckBox}
                  value={item.isCompleted}
                  name={todo.id}
                  id=""
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button
                    className="bg-red-500 hover:bg-red-700 font-bold  text-red-200 px-2 py-1 rounded-md mx-2"
                    onClick={HandleEdit}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 font-bold text-red-200 px-2 py-1 rounded-md mx-2"
                    onClick={HandleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
