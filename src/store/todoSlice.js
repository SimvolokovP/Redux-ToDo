import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{id: 1, title: 'Learn JS', body: 'learn arrays and objects', completed: true}],
  },
  reducers: {
    addNewTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: state.todos.length + 1,
        completed: false,
        title: action.payload.title,
        body: action.payload.body,
      });
    },
    deleteTodo(state, action) {
        console.log(action)
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleTodo(state, action) {
        const targetTodo = state.todos.find(todo => todo.id === action.payload.id);
        
        if (targetTodo) {
            targetTodo.completed = !targetTodo.completed;
        }
    },
  },
});

export const {addNewTodo, deleteTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;