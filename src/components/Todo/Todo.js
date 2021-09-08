import "./Todo.css";

const Todo = ({
  todo,
  completeTodo,
  deleteTodo,
  updateTodo,
  contenteditable,
}) => {
  return (
    <div className="todo" style={{ opacity: todo.isCompleted ? 0.5 : "" }}>
      <span
        contentEditable={contenteditable}
        suppressContentEditableWarning={true}
      >
        {" "}
        {todo.title}
      </span>
      <div>
        <button onClick={completeTodo}>Complete</button>
        <button onClick={deleteTodo}>delete</button>
        <button onClick={updateTodo}>edit</button>
      </div>
    </div>
  );
};

export default Todo;
