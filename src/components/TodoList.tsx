import { useContext } from "react";
import { TodoContext } from "../utils/todoContext";
import { IoMdInformation } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TodosTypes } from "../types/types";

interface Props {
  handleEdit: (args: TodosTypes) => void;
  handleDelete: (args: TodosTypes) => void;
  showBtn: (args: TodosTypes) => void;
}

export default function TodoList({ handleEdit, handleDelete, showBtn }: Props) {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos ? (
        <div className="todo-list">
          <ul className="todo-data">
            {todos.map((todo) => (
              <li key={todo.id} className="todo">
                <div>
                  <h4>{todo.title}</h4>
                  <span>
                    {todo.massage.length > 20
                      ? todo.massage.slice(0, 30) + "..."
                      : todo.massage}
                  </span>
                </div>
                {todo.show ? (
                  <div className="btn-group">
                    <button
                      className="todo-info-btn"
                      onClick={() => handleEdit(todo)}
                    >
                      <FaPen size={16} />
                    </button>
                    <button
                      className="todo-info-btn"
                      onClick={() => handleDelete(todo)}
                    >
                      <IoClose color="#ff8303" size={20} />
                    </button>
                  </div>
                ) : (
                  <button
                    className="todo-info-btn"
                    onClick={() => showBtn(todo)}
                  >
                    <IoMdInformation size={20} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="empty-list">
          <div className="line" />
          <p className="no-tasks">No tasks</p>
          <div className="line" />
        </div>
      )}
    </>
  );
}
