/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import AddTodoForm from "./components/AddForm/AddTodoForm";
import Todo from "./components/Todo/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const _fetch = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      _fetch
    );
    const resData = await res.json();
    setTodos(resData);
  };

  const postTodo = async (text) => {
    const beta = todos.length + 1;

    const _fetch = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: beta,
        id: beta,
        title: text,
        completed: true,
      }),
    };
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      _fetch
    );
    const resData = await res.json();
    addTodo(resData);
  };

  const addTodo = (text) => {
    const newTodos = [text, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    // optimise this function for faster performance
    const arr = todos.filter((val, i) => {
      console.log("t :: ", id);
      return val.id !== id;
    });
    setTodos(arr);
  };

  const deleteTodo = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    removeTodo(id);
  };
  return (
    <div className="App">
      <AddTodoForm postTodo={postTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          completeTodo={() => completeTodo(index)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
}

export default App;
