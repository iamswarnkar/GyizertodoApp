import { createContext, useState } from "react";
import { TodosTypes } from "../types/types";

const initialContextValue = {
  todos: undefined,
  setTodos: () => {},
};

export const TodoContext = createContext<{
  todos: TodosTypes[] | undefined;
  setTodos: React.Dispatch<React.SetStateAction<TodosTypes[] | undefined>>;
}>(initialContextValue);

interface Props {
  children: JSX.Element;
}

export default function TodoProvider({ children }: Props) {
  const [todos, setTodos] = useState<TodosTypes[]>();
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
