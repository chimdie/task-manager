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
