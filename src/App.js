/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import AddTodoForm from "./components/AddForm/AddTodoForm";
import Todo from "./components/Todo/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fetchTodos();
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
    // console.log(resData);
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
    console.log(todos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const delTodo = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    removeTodo(delTodo);
  };
  return (
    <div className="App">
      <AddTodoForm postTodo={postTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
}

export default App;
