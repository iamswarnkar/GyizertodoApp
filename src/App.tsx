import Header from "./components/Header";
import "./App.css";
import Modal from "./components/Modal";
import TodoFrom from "./components/Todofrom";
import { useContext, useState } from "react";
import { TodoContext } from "./utils/todoContext";
import TodoList from "./components/TodoList";
import { TodosTypes } from "./types/types";

function App() {
  const { todos, setTodos } = useContext(TodoContext);
  const [showAlert, setShowAlert] = useState(false);
  const [todoToDeleteOrEdit, setTodoToDeleteOrEdit] = useState<TodosTypes>();

  function showBtn(todo: TodosTypes) {
    const newMap = todos?.map((item) =>
      item.id === todo.id ? { ...item, show: !item.show } : item
    );
    setTodos(newMap);
  }

  function handleEdit(todo: TodosTypes) {
    setTodoToDeleteOrEdit(todo);
  }

  function handleDelete(todo: TodosTypes) {
    setShowAlert(true);
    setTodoToDeleteOrEdit(todo);
  }

  function handleCancel() {
    setShowAlert(false);
  }

  function onSubmit() {
    const newMap = todos?.filter((item) => item.id !== todoToDeleteOrEdit?.id);
    setTodos(newMap);
    setShowAlert(false);
  }
  return (
    <>
      <Header />
      <TodoFrom todoToDeleteOrEdit={todoToDeleteOrEdit} />
      <TodoList
        showBtn={showBtn}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {showAlert && (
        <Modal onCancel={handleCancel} onSubmit={onSubmit}>
          <h3>Delete this task?</h3>
        </Modal>
      )}
    </>
  );
}

export default App;
