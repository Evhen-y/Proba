import { createSelector } from "reselect";
import { IAppState } from "../../../shared";

const selectTodos = (state: IAppState) => state.todosReduser;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);
