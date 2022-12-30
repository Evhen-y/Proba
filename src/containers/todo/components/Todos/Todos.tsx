import React, { useState, useEffect } from "react";
import { Todo } from "../Todo";
import {getTodos} from "../../store"
import {useSelector} from "react-redux"

// export interface ITodos {
//   id?: number;
//   title: string;
//   createAt: Date;
//   completed: boolean;
// }
// export interface ITodosContainer {
//   todos: ITodos[];
// }
const Todos = () => {
  const todos = useSelector(getTodos())
  // const [todos, setTodos] = useState<ITodos[]>(
  //     [
  //   {
  //     id: 1,
  //     title: "text 001",
  //     createAt: new Date(),
  //     completed: false,
  //   },
  // ]
  // );

  // useEffect(() => {
  //   setTodos((state) =>
  //     state.concat(
  //         [
  //       {
  //         id: 1,
  //         title: "text 002",
  //         createAt: new Date(),
  //         completed: false,
  //       },
  //       {
  //         id: 1,
  //         title: "text 003",
  //         createAt: new Date(),
  //         completed: false,
  //       },
  //     ]
  //     ),
  //   );
  // }, []);
  return (
    <>
      {todos?.map(({ id, title }) => (
        <React.Fragment key={id}>
          <Todo title={title} id={id} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Todos;
