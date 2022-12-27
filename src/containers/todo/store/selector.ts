import { createSelector } from "reselect";
import { ITodosState } from "./interface";

interface IAppState {
  todos: ITodosState;
}

const selectTodos = (state: IAppState) => state.todos;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);
