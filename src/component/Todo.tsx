import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };


  const addTodo = () => {
    setTodoList([...todoList, todo]);
    setTodo("");
}

  return (
    <div>
      <input
        type="text"
        placeholder="input Value"
        value={todo}
        onChange={handleChange}
      />
      <button onClick={addTodo}>Add</button>
      <div>
        {todoList.map((cv) => (
          <li>{cv}</li>
        ))}
      </div>
    </div>
  );
};

export default Todo;
