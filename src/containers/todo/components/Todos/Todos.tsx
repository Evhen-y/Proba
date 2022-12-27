import React, { useState, useEffect } from "react";
import { Todo } from "../Todo";
export interface ITodos {
  id?: number;
  text: string;
  createAt: Date;
  completed: boolean;
}
export interface ITodosContainer {
  todos: ITodos[];
}
const Todos = () => {
  const [todos, setTodos] = useState<ITodos[]>([
    {
      id: 1,
      text: "text 001",
      createAt: new Date(),
      completed: false,
    },
  ]);

  useEffect(() => {
    setTodos((state) =>
      state.concat([
        {
          id: 1,
          text: "text 002",
          createAt: new Date(),
          completed: false,
        },
        {
          id: 1,
          text: "text 003",
          createAt: new Date(),
          completed: false,
        },
      ]),
    );
  }, []);
  return (
    <>
      {todos?.map(({ id, text }) => (
        <React.Fragment key={id}>
          <Todo text={text} id={id} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Todos;
