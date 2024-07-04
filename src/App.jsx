import { useState } from "react";
import "./index.css";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addNewTodo } from "./store/todoSlice";

function App() {
  const [newTodo, setNewTodo] = useState({ title: "title", body: "body" });

  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <form className="app__inputs">
          <input
            value={newTodo.title}
            type="text"
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          />
          <input
            value={newTodo.body}
            type="text"
            onChange={(e) => setNewTodo({ ...newTodo, body: e.target.value })}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addNewTodo(newTodo));
              setNewTodo({ title: "", body: "" });
            }}
          >
            add todo
          </button>
        </form>
        <div className="app__todo">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
