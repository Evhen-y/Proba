import React, { useState, useEffect } from "react";
import { Todo } from "../Todo";
import { getTodos } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import {ITodo, getTodosFilter, getFilterSettings, todosActions} from "../../store"

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
  const [searchSrt, setSearchStr] = useState("");
  const todos: ITodo[] = useSelector(getTodosFilter());
  const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(todosActions.FETCH_TODOS.REQUEST({}));
  //     dispatch(usersActions.FETCH_USERS.REQUEST({}));
  //      dispatch(todosActions.TODO_FILTER.REQUEST({}));
  //   }, []);
  const filterSettings = useSelector(getFilterSettings());

  const searchHandlerTodo = () => {
    dispatch(todosActions.TODO_FILTER.REQUEST({ ...filterSettings, search: searchSrt }));
  };
  return (
      <div>
        <div>
          <input value={searchSrt} type="text" onChange={(e) => setSearchStr(e.target.value)} />
          <button onClick={searchHandlerTodo}>SEARCH</button>
        </div>

        {todos?.map(({ title, id }) => (
            <Todo key={id} id={id as number} title={title} />
        ))}
      </div>
  );
  // const todos = useSelector(getTodos());
  // // const [todos, setTodos] = useState<ITodos[]>(
  // //     [
  // //   {
  // //     id: 1,
  // //     title: "text 001",
  // //     createAt: new Date(),
  // //     completed: false,
  // //   },
  // // ]
  // // );
  //
  // // useEffect(() => {
  // //   setTodos((state) =>
  // //     state.concat(
  // //         [
  // //       {
  // //         id: 1,
  // //         title: "text 002",
  // //         createAt: new Date(),
  // //         completed: false,
  // //       },
  // //       {
  // //         id: 1,
  // //         title: "text 003",
  // //         createAt: new Date(),
  // //         completed: false,
  // //       },
  // //     ]
  // //     ),
  // //   );
  // // }, []);
  // return (
  //   <>
  //     {todos?.map(({ id, title }) => (
  //       <React.Fragment key={id}>
  //         <Todo title={title} id={id} />
  //       </React.Fragment>
  //     ))}
  //   </>
  // );
};

export default Todos;
