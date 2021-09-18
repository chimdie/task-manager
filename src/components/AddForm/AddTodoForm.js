import React, { useState } from "react";
import "./AddTodo.css";

const AddTodoForm = ({ postTodo }) => {
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    postTodo(value);

    const id = value.length + 1;
    let newArray = localStorage.getItem("userTask") || [];

    newArray.push({ id, value });

    const userTask = localStorage.setItem("userTask", JSON.stringify(newArray));
    // const retData = localStorage.getItem(userTask);
    console.log("gh", userTask);

    // if (savedItem) setValue(savedItem);
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
