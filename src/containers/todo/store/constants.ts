import { createActionsTypes } from "../../../utils";
("../../../utils");
export const ACTIONS_TYPES = ["FETCH_TODOS", "FETCH_TODO", "ADD_TODO", "EDIT_TODO", "REMOVE_TODO"];

export const TodosActionsType = createActionsTypes(ACTIONS_TYPES);
