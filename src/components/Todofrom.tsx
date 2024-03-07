import { useContext, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { TodoContext } from "../utils/todoContext";

export default function TodoFrom() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const { todos = [], setTodos } = useContext(TodoContext);

  function handleSave() {
    if (input === "" && title === "") {
      return alert("input and title can't be empty ");
    }
    const newTodos = [
      ...todos,
      { id: self.crypto.randomUUID(), title, massage: input, show: false },
    ];
    setTodos(newTodos);
    setInput("");
    setTitle("");
  }

  return (
    <div className="input-container">
      <div className="input-group">
        <input
          value={title}
          type="Text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
        />
        <input
          type="Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Input..."
        />
      </div>
      <div>
        <button className="save-btn" onClick={handleSave}>
          <HiOutlinePlusSm size={40} color="#ff8303" />
        </button>
      </div>
    </div>
  );
}
