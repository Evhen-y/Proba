import { createSelector } from "reselect";
import { IAppState } from "../../../shared";

const selectUsers = (state: IAppState) => state.usersReduser;
const selectUserFilter = (state: IAppState) => state.usersReduser.userFilterSettings;
export const getUsers = () => createSelector(selectUsers, (state) => state.users);

export const getUserFilterSetings = () => createSelector(selectUsers, (state) => state.userFilterSettings);

export const getUserFilter = () =>
    createSelector([selectUsers, selectUserFilter], (state, filter) => {
        const { search } = filter;

        return state.users.filter((user) => user.name.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase()));
        // return state.todos.filter((todo) => Object.values(todo.text)
        // .filter((value) => !!value).some((value) => value.toLowerCase().trim().includes(search)));
        return state.users.filter((user) => user.name.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase()))
    });