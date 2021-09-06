import "./Todo.css";

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
  return (
    <div
      key={index}
      className="todo"
      style={{ opacity: todo.isCompleted ? .5 : "" }}
    >
      {todo.title}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
