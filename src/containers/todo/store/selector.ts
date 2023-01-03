import { createSelector } from "reselect";
import { IAppState } from "../../../shared";

const selectTodos = (state: IAppState) => state.todosReduser;
const selectFiltersTodos = (state: IAppState) => state.todosReduser.filterSettings;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);
export const getFilterSettings = () => createSelector(selectTodos, (state) => state.filterSettings);

export const getTodosFilter = () =>
    createSelector([selectTodos, selectFiltersTodos], (state, filter) => {
        const { search } = filter;
        console.log("filter_todo", filter);
        return state.todos.filter((todo) => todo.title.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase()));
        // return state.todos.filter((todo) => Object.values(todo.text)
        // .filter((value) => !!value).some((value) => value.toLowerCase().trim().includes(search)));
    });