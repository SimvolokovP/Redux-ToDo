import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/todoSlice";

export default function TodoItem({ id, title, body, completed }) {

  const dispatch = useDispatch();

  return (
    <li onClick={ () => dispatch(toggleTodo({id})) }>
      <div>
        <div
          style={
            completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {title}
        </div>
        <div>{body}</div>
      </div>
      <button onClick={() => dispatch(deleteTodo({id})) }>delete</button>
    </li>
  );
}
