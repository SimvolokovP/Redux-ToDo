import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className="todos-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
          body={todo.body}
        />
      ))}
    </ul>
  );
}
