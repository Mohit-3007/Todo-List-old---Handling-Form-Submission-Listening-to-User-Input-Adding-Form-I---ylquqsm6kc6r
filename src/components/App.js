import React from "react";
import "./../styles/App.css";

function App() {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);

  const addToTodo = () => {
    if (val === "") return;
    console.log(val);
    setTodo([
      ...todo,
      {
        keyVal: val,
        isedited: false,
      },
    ]);
    setVal("");
  };

  const deleteTodo = (index) => {
    const updatedTodo = [...todo]; // Create a copy of the todo array
    updatedTodo.splice(index, 1); // Modify the copy
    setTodo(updatedTodo); // Update the state with the modified cop
  };

  const editTodo = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index].isedited = true; // Set the task to edit mode
    setTodo(updatedTodo);
  };

  const saveEditedTodo = (index) => {
    const updatedTodo = [...todo];
    if (updatedTodo[index].keyVal.trim() !== "") {
      updatedTodo[index].isedited = false; // Turn off edit mode
      setTodo(updatedTodo);
    }
  };

  return (
    <div id="main">
      <h1>To-Do-List</h1>
      <textarea
        id="task"
        placeholder="Enter Todo's here"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button id="button" onClick={addToTodo}>
        Add Todo
      </button>

      <h3>{todo.length != 0 ? "Your ToDo's" : "Add Some ToDo"}</h3>
      <ol>
        {todo.length != 0 &&
          todo.map((each, index) => {
            return (
              <li key={index} className="list">
                {each.isedited ? (
                  <div>
                    <textarea
                      className="editTask"
                      value={each.keyVal}
                      onChange={(e) => {
                        const updatedTodo = [...todo];
                        updatedTodo[index].keyVal = e.target.value;
                        setTodo(updatedTodo);
                      }}
                    />
                    <button
                      className="saveTask"
                      onClick={() => saveEditedTodo(index)}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <span>{each.keyVal}</span>
                    <br />
                    <button id="button" onClick={() => editTodo(index)}>
                      Edit Todo
                    </button>
                    <button id="button" onClick={() => deleteTodo(index)}>
                      Delete Todo
                    </button>
                  </div>
                )}
              </li>
            );
          })}
      </ol>
    </div>
  );
}

export default App;
