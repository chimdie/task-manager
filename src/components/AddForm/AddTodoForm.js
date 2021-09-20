import React, { useState, useEffect } from "react";
import "./AddTodo.css";

const AddTodoForm = ({ postTodo }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const userTask = localStorage.getItem("userTask");
    if (userTask) setValue(JSON.parse(userTask));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("userTask", JSON.stringify(value));
  // });

  const handleValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;
    postTodo(value);

    const id = value.length + 1;
    let DBtodos = JSON.parse(localStorage.getItem("userTask"));

    if (Array.isArray(DBtodos)) {
      // console.log({ DBtodos });
      DBtodos.push({ id, value });
      const userTask = localStorage.setItem(
        "userTask",
        JSON.stringify(DBtodos)
      );
    } else {
      let DBtodos = [];
      DBtodos.push({ id, value });

      const userTask = localStorage.setItem(
        "userTask",
        JSON.stringify(DBtodos)
      );
      // setValue(userTask)
    }
    setValue("");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={value}
          onChange={handleValue}
          placeholder="Add Task"
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
