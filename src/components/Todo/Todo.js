import "./Todo.css";

const Todo = ({
  todo,
  completeTodo,
  deleteTodo,
  updateTodo,
  contenteditable,
}) => {
  return (
    <div
      style={{ opacity: todo.isCompleted ? 0.5 : "" }}
      contentEditable={contenteditable}
      suppressContentEditableWarning={true}
    >
      <td>{todo.title}</td>
      <td>
        <button onClick={completeTodo} className="complete">
          Complete
        </button>
        <button onClick={deleteTodo} className="delete">
          delete
        </button>
        <button onClick={updateTodo} className="edit">
          edit
        </button>
      </td>
    </div>
  );
};

export default Todo;
