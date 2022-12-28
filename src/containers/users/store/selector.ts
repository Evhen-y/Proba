import { createSelector } from "reselect";
import { ITodosState } from "../../todo";
import { usersRedusers } from "./reduser";
import { IAppState } from "../../../shared";

const selectUsers = (state: IAppState) => state.usersReduser;
// const selectUserFilter = (state: IAppState) => state.usersReduser.userFilterSettings;
export const getUsers = () => createSelector(selectUsers, (state) => state.users);
export const getUser = () => createSelector(selectUsers, (state) => state.user);
