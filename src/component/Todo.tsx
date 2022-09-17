import React, { useState, useRef } from "react";

const Todo = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = () => {
    if (inputRef.current) {
      const todo = inputRef.current?.value;
      setTodoList([...todoList, todo]);
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="input Value" />
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
