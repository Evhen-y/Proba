import { Reducer as IReduser } from "redux";
import { TodosActionsType } from "./constants";
import { ITodosState } from "./interface";

const initionState: ITodosState = {
  todos: [],
  loading: false,
  error: null,
  todo: null,
};
export const todosReduser: IReduser<ITodosState> = (state: ITodosState = initionState, action) => {
  switch (action.type) {
    case TodosActionsType.FETCH_TODOS.REQUEST:
    case TodosActionsType.FETCH_TODO.REQUEST:
    case TodosActionsType.EDIT_TODO.REQUEST:
    case TodosActionsType.ADD_TODO.REQUEST:
    case TodosActionsType.REMOVE_TODO.REQUEST:
      console.log("reduser___Request")
      return { ...state, loading: true };

    case TodosActionsType.FETCH_TODOS.SUCCESS:
      console.log("REDUSER____SECCESS")
      return { ...state, loading: false, todos: action.payload };

    case TodosActionsType.FETCH_TODO.SUCCESS:
      return { ...state, loading: false, todo: action.payload };

    case TodosActionsType.EDIT_TODO.SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].map((todo) => (todo.id === action.payload ? action.payload : todo)),
      };

    case TodosActionsType.ADD_TODO.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].concat(action.payload) };

    case TodosActionsType.REMOVE_TODO.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].filter((todo) => todo.id !== action.payload) };

    case TodosActionsType.FETCH_TODOS.FAILURE:
    case TodosActionsType.FETCH_TODO.FAILURE:
    case TodosActionsType.EDIT_TODO.FAILURE:
    case TodosActionsType.ADD_TODO.FAILURE:
    case TodosActionsType.REMOVE_TODO.FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
