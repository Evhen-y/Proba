import { createActionsTypes } from "../../../utils";
export const ACTIONS_TYPES_USERS = ["FETCH_USERS", "FETCH_USER", "ADD_USER", "EDIT_USER", "REMOVE_USER", "USER_FILTER"];
export const UsersActionsType = createActionsTypes(ACTIONS_TYPES_USERS);
