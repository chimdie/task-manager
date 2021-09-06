import "./Todo.css";

const Todo = ({ todo, completeTodo, deleteTodo }) => {
  return (
    <div
      className="todo"
      style={{ opacity: todo.isCompleted ? .5 : "" }}
    >
      {todo.title}
      <div>
        <button onClick={completeTodo}>Complete</button>
        <button onClick={deleteTodo}>x</button>
      </div>
    </div>
  );
};

export default Todo;
