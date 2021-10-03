import React, { useState, useEffect } from "react";
import AddTodoForm from "./components/AddForm/AddTodoForm";
import Todo from "./components/Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const userTask = localStorage.getItem("userTask");
    if (userTask) setTodos(JSON.parse(userTask));
  };

  const postTodo = async (text) => {
    const uid = uuidv4();

    const _fetch = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: uid,
        id: uid,
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

  const deleteTodo = async (id) => {
    removeTodo(id);
    let todos = JSON.parse(localStorage.getItem("userTask"));
    let newTodos = todos.filter((val) => {
      return val.id !== id;
    });
    localStorage.setItem("userTask", JSON.stringify(newTodos));
  };

  const removeTodo = (id) => {
    const selectedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    console.log("removed id:", id);
    setTodos(selectedTodo);
  };

  const selectTodoToEdit = (todoId) => {
    let _todo = findTodo(todoId);
    _todo["contentEdit"] = true;
    setCurrentTodo(_todo);
  };

  const findTodo = (id) => {
    const _todo = todos.find((todo) => {
      return todo.id === id;
    });
    return _todo;
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
          contenteditable={
            currentTodo.id === todo.id && currentTodo.contentEdit === true
              ? true
              : false
          }
          updateTodo={() => selectTodoToEdit(todo.id)}
        />
      ))}
    </div>
  );
}

export default App;
