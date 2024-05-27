"use client"
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
  const filteredTodos = useSelector((state) => {
    return todos
  });

  console.log('Filtered Todos:', filteredTodos);

  return (
    <ul className="mt-6">
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
